import { Component, OnInit } from '@angular/core';
import { DashService } from './dash.service';
import { Data } from './dashboardclass';

@Component({
  selector: 'app-dashboardmodule',
  templateUrl: './dashboardmodule.component.html',
  styleUrls: ['./dashboardmodule.component.css']
})
export class DashboardmoduleComponent implements OnInit {

  tabs = ['1']
  selTab: number = 0;
  data!:Data
  prikaz!:String
  constructor( private dashServ:DashService) {
    this.dashServ.podaci$.subscribe(pod=> this.data = pod)
    this.dashServ.jsonPrikaz$.subscribe(pod=>this.prikaz = pod)
   }

  ngOnInit(): void {
  }

  addTab() {
    this.tabs.push(String(this.tabs.length + 1))  

    this.dashServ.addData({
      id:this.tabs.length,
      sideData:`test,${this.tabs.length}`
    })
    this.dashServ.getStorage();
  }

  deleteTab(index: number) {
    console.log()
    this.selTab = this.tabs.length - 1;
    this.tabs.splice(index, 1);
    
  }
  changeData(event:any){
    this.dashServ.filterData(event);
  }
}
