import { Component, ViewChild } from '@angular/core';
import { ReportGeneratorService } from './report-generator.service';
import {SignalRService} from './signal-r.service';
import {MatTable} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rptGenSvc: ReportGeneratorService, private signalRService:SignalRService) { }

  title = 'report-gen-ui';
  reportName;
  reportCount;
  messages:any[]=[];
  @ViewChild(MatTable) messageTable: MatTable<any>;
  displayedColumns: string[] = ['report', 'output', 'created'];

  ngOnInit() {
    this.signalRService.init();
    this.signalRService.reportMessages.subscribe(data => {
      this.messages.push(data);
      console.log(data);
      this.messageTable.renderRows();
    });
  }

  enqueueReports():void {
    for (var i = 0; i < this.reportCount; i++) {
      this.rptGenSvc.queueReport(this.reportName).subscribe();
    }
  }


}
