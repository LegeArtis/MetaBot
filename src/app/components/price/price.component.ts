import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Output() openCallbackForm = new EventEmitter();

  openCallback() {
    this.openCallbackForm.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
