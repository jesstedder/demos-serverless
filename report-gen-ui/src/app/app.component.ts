import { Component } from '@angular/core';
import { ReportGeneratorService } from './report-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rptGenSvc: ReportGeneratorService) { }
  title = 'report-gen-ui';
  reportName = null;
  reportCount = 10;

  enqueueReports():void {
    for (var i = 0; i < this.reportCount; i++) {
      this.rptGenSvc.queueReport(this.reportName).subscribe();
    }
  }


}
