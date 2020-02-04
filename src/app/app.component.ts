import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DummyService } from './services/dummy.service';
import * as jp from 'jsonpath';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('jsonViewer') jsonViewer: ElementRef;


  dummyData: any = '';
  sampleText: any = '';
  query = '';
  error = false;
  constructor(private dummyService: DummyService) {

  }

  ngOnInit() {
    this.dummyService.getData().subscribe(data => {
      this.dummyData = data;
    });
  }

  queryChange(query: any) {
    try {
      this.error = false;
      this.sampleText = jp.query(this.dummyData, String(query));
    } catch (err) {
      this.sampleText = [];
      this.error = true;
    }

    if (!this.sampleText.length) {
       this.error = true;
    }

    // const key_pattern = /\w+:/gm;


  }
}
