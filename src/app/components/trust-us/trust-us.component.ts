import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trust-us',
  templateUrl: './trust-us.component.html',
  styleUrls: ['./trust-us.component.css']
})
export class TrustUsComponent implements OnInit {
  public listOfTrust = [
    'assets/images/trust-us/Alfa-Bank%201.png',
    'assets/images/trust-us/icon_CXI.png',
    'assets/images/trust-us/icon_min.png',
    'assets/images/trust-us/icon_umico.png'
  ];
  public isMobile = false;
  public current = 0;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 460) {
      this.isMobile = true;
    }
  }

  nextImg() {
    if (this.current < this.listOfTrust.length - 1) {
      ++this.current;
    } else {
      this.current = 0;
    }
  }

  prevImg() {
    if (this.current === 0) {
      this.current = this.listOfTrust.length - 1;
    } else {
      --this.current;
    }
  }

}
