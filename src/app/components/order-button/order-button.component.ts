import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.css']
})
export class OrderButtonComponent implements OnInit {
  @Input() blue;
  @Output() onChanged = new EventEmitter<boolean>();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onChangeForm() {
    console.log('button component');
    this.onChanged.emit(true);
  }

  // clickButton() {
  //   if (window.innerWidth <= 500) {
  //     this.route.navigateByUrl('/callback');
  //   } else {
  //     this.callback = true;
  //   }
  // }

}
