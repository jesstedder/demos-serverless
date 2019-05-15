import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportGeneratorService {

  constructor(private http: HttpClient) { }

  queueReport(name) {
    return this.http.get("http://myfucniotnurl.jss?name="+name);
  }
}