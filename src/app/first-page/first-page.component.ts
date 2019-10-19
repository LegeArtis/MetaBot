import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  public listImgDesktop = [
    '../../assets/images/first-screen/Banner1Desktop.png',
    '../../assets/images/first-screen/Banner2_Desktop.png',
    '../../assets/images/first-screen/Banner3_Desktop.png'
  ];
  public listImgTablet = [
    '../../assets/images/first-screen/Banner1_Tablet.png',
    '../../assets/images/first-screen/Banner2_Tablet.png',
    '../../assets/images/first-screen/Banner3_Tablet.png'
  ];
  public current = 0;
  public change = true;
  public isMobile = false;
  @Output() openCallbackFrom = new EventEmitter<boolean>();

  constructor() { }

  callbackFormMethod() {
    this.openCallbackFrom.emit();
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
    setInterval(() => {
      if (this.change) {
        this.nextImg();
      }
      this.change = true;
    }, 5000);
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
