import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout-side',
  templateUrl: './layout-side.component.html',
  styleUrls: ['./layout-side.component.css']
})
export class LayoutSideComponent implements OnInit {

  @Output() promena:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  renderTab(){
    this.promena.emit('tab');
  }

}
