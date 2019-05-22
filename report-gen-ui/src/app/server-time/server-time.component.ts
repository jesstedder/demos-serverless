import { Component, OnInit } from '@angular/core';
import {ReportGeneratorService} from '../report-generator.service';

@Component({
  selector: 'app-server-time',
  templateUrl: './server-time.component.html',
  styleUrls: ['./server-time.component.css']
})
export class ServerTimeComponent implements OnInit {

  constructor(private rptGenSvc:ReportGeneratorService) { }

  serverTime:any = null;

  ngOnInit() {
  }

  serverTimeClick(){
    this.rptGenSvc.getServerTime().subscribe(st=>{
      this.serverTime = st;
    })
  }

}
