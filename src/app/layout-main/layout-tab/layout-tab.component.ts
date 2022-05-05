import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout-tab',
  templateUrl: './layout-tab.component.html',
  styleUrls: ['./layout-tab.component.css']
})
export class LayoutTabComponent implements OnInit {

  @Output() promena:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  renderSide(){
    this.promena.emit('side');
  }
}
