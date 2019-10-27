import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  @Output() public closeMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeMenuBlock() {
    this.closeMenu.emit();
  }
}
