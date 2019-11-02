import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  public animationSpeed = 5;
  public pxForSwipe = 50;
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

  nextCurrent() {
    return this.listOfCertificates.length - 1 > this.current ? this.current + 1 : 0;
  }

  prevCurrent() {
    return  this.current === 0 ? this.listOfCertificates.length - 1 : this.current - 1;
  }

  nextImg(x) {
    const int = setInterval(() => {
      const current = document.getElementById('currentCert');
      const next = document.getElementById('nextCert');
      current.style.transform = `translateX(-${x}%)`;
      next.style.transform = `translateX(${100 - x}%)`;
      if (x >= 100) {
        clearInterval(int);
        next.style.position = 'relative';
        current.remove();
        next.id = 'currentCert';
        this.current = this.nextCurrent();
        document.getElementById('prevCert').setAttribute('src', this.listOfCertificates[this.prevCurrent()]);
        const newNext = document.createElement('img');
        newNext.id = 'nextCert';
        newNext.src = this.listOfCertificates[this.nextCurrent()];
        newNext.alt = 'Tablet_img';
        newNext.style.transform = 'translateX(100%)';
        newNext.style.position = 'absolute';
        newNext.style.top = '0';
        newNext.style.left = '0';
        newNext.style.width = '100%';
        newNext.addEventListener('click', () => this.zoomIn(this.listOfCertificates[this.current]));
        document.getElementById('img_block_cert').appendChild(newNext);
      }
      x += 1;
    }, this.animationSpeed);
  }

  prevImg(x) {
    const int = setInterval(() => {
      const current = document.getElementById('currentCert');
      const prev = document.getElementById('prevCert');
      current.style.transform = `translateX(${-x}%)`;
      prev.style.transform = `translateX(${-100 - x}%)`;
      if (x <= -100) {
        clearInterval(int);
        prev.style.position = 'relative';
        current.remove();
        prev.id = 'currentCert';
        this.current = this.prevCurrent();
        document.getElementById('nextCert').setAttribute('src', this.listOfCertificates[this.nextCurrent()]);
        const newPrev = document.createElement('img');
        newPrev.id = 'prevCert';
        newPrev.src = this.listOfCertificates[this.prevCurrent()];
        newPrev.alt = 'Tablet_img';
        newPrev.style.transform = 'translateX(-100%)';
        newPrev.style.position = 'absolute';
        newPrev.style.top = '0';
        newPrev.style.left = '0';
        newPrev.style.width = '100%';
        newPrev.addEventListener('click', () => this.zoomIn(this.listOfCertificates[this.current]));
        document.getElementById('img_block_cert').appendChild(newPrev);
      }
      x -= 1;
    }, this.animationSpeed);
  }

  onPan(e) {
    const x = Math.round(e.deltaX / window.innerWidth * 100) * -1;
    if ( x >= 0) {
      const current = document.getElementById('currentCert');
      const next = document.getElementById('nextCert');
      current.style.transform = `translateX(-${x}%)`;
      next.style.transform = `translateX(${100 - x}%)`;
    } else {
      const current = document.getElementById('currentCert');
      const next = document.getElementById('prevCert');
      current.style.transform = `translateX(${-x}%)`;
      next.style.transform = `translateX(${-100 - x}%)`;
    }
    if (e.isFinal) {
      if (Math.abs(e.deltaX) > this.pxForSwipe) {
        x > 0 ? this.nextImg(x) : this.prevImg(x);
      }
      if (Math.abs(e.deltaX) < this.pxForSwipe) {
        x > 0 ? this.backFromNext(x) : this.backFromPrev(x);
      }
    }
  }

  backFromNext(x) {
    const int = setInterval(() => {
      const current = document.getElementById('currentCert');
      const next = document.getElementById('nextCert');
      current.style.transform = `translateX(${-x}%)`;
      next.style.transform = `translateX(${100 - x}%)`;
      if (x <= 0) {
        clearInterval(int);
      }
      x -= 1;
    }, this.animationSpeed);
  }

  backFromPrev(x) {
    const int = setInterval(() => {
      const current = document.getElementById('currentCert');
      const prev = document.getElementById('prevCert');
      current.style.transform = `translateX(${-x}%)`;
      prev.style.transform = `translateX(${-100 - x}%)`;
      if (x >= 0) {
        clearInterval(int);
      }
      x += 1;
    }, this.animationSpeed);
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
