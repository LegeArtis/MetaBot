import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Output() public openCallbackForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openCallback() {
    this.openCallbackForm.emit();
  }

}
