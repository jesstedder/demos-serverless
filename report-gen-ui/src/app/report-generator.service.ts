import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportGeneratorService {

  constructor(private http: HttpClient) { }

  queueReport(name) {
    //return this.http.get("http://myfucniotnurl.jss?name="+name);
    return this.http.post(`${environment.functionBaseUrl}/AddReportToQueue`, "{name:'" + name + "'}");
  }
}
