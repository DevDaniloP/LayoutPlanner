import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.css']
})
export class LayoutMainComponent implements OnInit {

  mode: string= 'tab';
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('Mode') !== null){
      this.mode = sessionStorage.getItem('Mode')!;
    }
  }
  Switch(event: any) {

      sessionStorage.setItem("Mode", event);
      this.mode = event;
  }

}
