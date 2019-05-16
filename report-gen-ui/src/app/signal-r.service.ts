import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SignalRConnection } from './models/signal-r-connection.model';
import { environment } from '../environments/environment';
import * as SignalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  reportMessages: Subject<any> = new Subject();
  private hubConnection: SignalR.HubConnection;

  constructor(private http: HttpClient) {
  }

  private getSignalRConnection(): Observable<SignalRConnection> {
    return this.http.post<SignalRConnection>(`${environment.functionBaseUrl}/negotiate`, "");
  }

  init() {
    this.getSignalRConnection().subscribe(con => {
      const options = {
        accessTokenFactory: () => con.accessToken
      };

      this.hubConnection = new SignalR.HubConnectionBuilder()
        .withUrl(con.url, options)
        .configureLogging(SignalR.LogLevel.Information)
        .build();

      this.hubConnection.start().catch(error => console.error(error));

      this.hubConnection.on('report-processing', data => {
        this.reportMessages.next(data);
      });
    });
  }
}
