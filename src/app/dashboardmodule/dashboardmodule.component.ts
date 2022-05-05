import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  data!: Data
  prikaz!: String
  jsonPrikaz:any;
  formatter = [''];
  filter = ['']
  date!: Date | null;
  constructor(private dashServ: DashService) {
  }

  ngOnInit(): void {
    this.dashServ.podaci$.subscribe(pod => {
      this.data = pod
      this.formatter = []
      this.formatter.push(String(this.data.id))
      this.formatter.push(this.data.sideData!)
    })
    this.dashServ.sviPodaci$.subscribe(pod => this.prikaz = JSON.stringify(pod))
    
    this.jsonPrikaz
  }

  addTab() {
    this.tabs.push(String(this.tabs.length + 1))

    // this.dashServ.addData({
    //   id: this.tabs.length,
    //   sideData: `test,${this.tabs.length}`
    // })
  }

  deleteTab(index: number) {
    this.selTab = index - 1
    this.tabs.splice(index, 1);
    this.dashServ.deleteData(index);
  }
  changeData(event: any) {
    this.dashServ.filterData(event);
    this.selTab = event
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(event.container.id =='cdk-drop-list-0'){
        console.log(event.container.element)
        //this.dashServ.deleteEl(event.container.data)
      }
      
    }
  }
  onChangeEvent(evn:any,value:any){
    console.log(evn.value)
    // console.log(value)
    this.dashServ.addData({
        id: this.selTab+1,
        opts:evn.value,
        sideData: value
      })
  }
}
