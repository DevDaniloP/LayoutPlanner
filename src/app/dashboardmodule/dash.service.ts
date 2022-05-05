import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './dashboardclass';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private storage: Data[] = [{
    id: 1,
    sideData: 'test,1'
    } 
  ]
  private podaci: BehaviorSubject<Data> = new BehaviorSubject<Data>(this.storage[0])
  private jsonPrikaz:BehaviorSubject<String> = new BehaviorSubject<String>(JSON.stringify(this.storage))
  podaci$ = this.podaci.asObservable();
  jsonPrikaz$ = this.jsonPrikaz.asObservable();
  constructor() { }


  filterData(izabrani: number) {
    this.podaci.next(this.storage[izabrani])
  }
  addData(newData: Data) {
    this.storage.push(newData);
    console.log(this.storage);
  }
  deleteData(izabrani: number) {
    const ind = this.storage.find(x=>x.id == izabrani)
    this.storage.splice(izabrani,1);
  }
  getStorage(){
    this.jsonPrikaz.next(JSON.stringify(this.storage))
  }
}
