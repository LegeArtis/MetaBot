import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Output() public openMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickHamburger() {
    this.openMenu.emit();
  }

}
