import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public callback = false;
  public menu = false;

  toggleCallback() {
    this.callback = !this.callback;
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  constructor() { }

  ngOnInit() {
  }

}
