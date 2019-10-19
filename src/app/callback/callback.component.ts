import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  @Output() callbackForm = new EventEmitter<boolean>();

  ngOnInit() {
  }

  constructor() { }

  close() {
    this.callbackForm.emit();
  }
}
