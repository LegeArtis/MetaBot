import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  public listImgDesktop = [
    'assets/images/first-screen/Desktop1.png',
    'assets/images/first-screen/Desktop2.png',
    'assets/images/first-screen/Desktop3.png'
  ];
  public listImgTablet = [
    'assets/images/first-screen/Tablet1.png',
    'assets/images/first-screen/Tablet2.png',
    'assets/images/first-screen/Tablet3.png'
  ];
  public current = 0;
  public change = true;
  public isMobile = false;
  @Output() openCallbackFrom = new EventEmitter<boolean>();

  constructor() { }

  onSwipe(e) {
    const x = Math.abs(e.deltaX);
    (x  > 40 && e.deltaX > 0) ? this.prevImg() : this.nextImg();
  }

  callbackFormMethod() {
    this.openCallbackFrom.emit();
  }

  ngOnInit() {
    if (window.innerWidth <= 768 || window.innerWidth < window.innerHeight) {
      this.isMobile = true;
    }
  }

  nextImg() {
    this.change = false;
    if (this.current < this.listImgDesktop.length - 1) {
      ++this.current;
    } else {
      this.current = 0;
    }
  }

  prevImg() {
    this.change = false;
    if (this.current === 0) {
      this.current = this.listImgDesktop.length - 1;
    } else {
      --this.current;
    }
  }
}
