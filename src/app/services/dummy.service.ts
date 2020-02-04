import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import * as data from './dummy.json';


@Injectable({
  providedIn: 'root'
})
export class DummyService {
dummyData = (data as any).default;


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next(this.dummyData);
    });
  }
}
