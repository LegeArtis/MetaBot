import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public callback = false;

  toggleCallback() {
    this.callback = !this.callback;
  }

  constructor() { }

  ngOnInit() {
  }

}
