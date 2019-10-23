import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  public listOfCertificates = [
    'assets/images/certificates/doc1.jpg',
    'assets/images/certificates/doc2.jpg',
    'assets/images/certificates/doc3.jpg',
    'assets/images/certificates/doc4.jpg',
  ];
  public mobile = false;
  public zoomInUrl;
  public isZoomIn = false;
  public current = 0;
  public isZoomLarge = false;
  public desktop = false;

  nextImg() {
    if (this.current < this.listOfCertificates.length - 1) {
      ++this.current;
    } else {
      this.current = 0;
    }
  }

  prevImg() {
    if (this.current === 0) {
      this.current = this.listOfCertificates.length - 1;
    } else {
      --this.current;
    }
  }

  zoomIn(url) {
    document.body.style.overflow = 'hidden';
    this.zoomInUrl = url;
    this.isZoomIn = true;
  }

  zoomOut() {
    document.body.style.overflow = 'auto';
    this.isZoomIn = false;
    this.isZoomLarge = false;
  }

  zoomOutLarge() {
    this.isZoomLarge = false;
  }
  zoomLarge() {
    this.isZoomLarge = true;
  }

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 460) {
      this.mobile = true;
    }
    if (window.innerWidth > window.innerHeight) {
      this.desktop = true;
    }
  }
}
