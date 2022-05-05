import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './dashboardclass';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private storage: any[] = [{
    id: 1,
    sideData: 'test,1'
  }]
  private podaci: BehaviorSubject<Data> = new BehaviorSubject<Data>(this.storage[0]);
  private sviPodaci: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>(this.storage)
  podaci$ = this.podaci.asObservable();
  sviPodaci$ = this.sviPodaci.asObservable();

  constructor() {
    if (sessionStorage.getItem('STORAGE') !== null) {
      // let resp = JSON.parse(JSON.stringify(sessionStorage.getItem('STORAGE')));
      // this.storage = JSON.parse(resp);
    }
    else {
      //sessionStorage.setItem('STORAGE', JSON.stringify(this.storage))
    }
    // this.podaci.next(this.storage[0])
    // this.sviPodaci.next(this.storage);
  }


  filterData(izabrani: number) {
    this.podaci.next(this.storage[izabrani])
  }
  addData(newData: any) {
    this.storage.push(newData);
    //sessionStorage.setItem('STORAGE', JSON.stringify(this.storage))
    this.sviPodaci.next(this.storage)
  }
  deleteEl(element:Data){
    this.storage.filter(elemn => elemn!== element)
    this.sviPodaci.next(this.storage);
  }
  deleteData(izabrani: number) {
    this.storage.splice(izabrani, 1);
    //sessionStorage.setItem('STORAGE', JSON.stringify(this.storage))
    this.sviPodaci.next(this.storage)
  }
}
