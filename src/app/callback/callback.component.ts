import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit, OnDestroy {
  @Output() callbackForm = new EventEmitter<boolean>();

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  constructor() { }

  close() {
    this.callbackForm.emit();
  }
}
