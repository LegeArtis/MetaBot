import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  public animationConfig = {
    animationSpeed: 5,
    pxForSwipe: 50,
    currentElementId: 'currentCert',
    prevElementId: 'prevCert',
    nextElementEd: 'nextCert',
    parentElementId: 'img_block_cert',
    counter: 0
  };
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
    const { currentElementId, nextElementEd, prevElementId, parentElementId, animationSpeed} = this.animationConfig;
    const int = setInterval(() => {
      const current = document.getElementById(currentElementId);
      const next = document.getElementById(nextElementEd);
      current.style.transform = `translateX(-${x}%)`;
      next.style.transform = `translateX(${100 - x}%)`;
      if (x >= 100) {
        clearInterval(int);
        next.style.position = 'relative';
        current.remove();
        next.id = currentElementId;
        this.current = this.nextCurrent();
        document.getElementById(prevElementId).setAttribute('src', this.listOfCertificates[this.prevCurrent()]);
        const newNext = document.createElement('img');
        newNext.id = nextElementEd;
        newNext.src = this.listOfCertificates[this.nextCurrent()];
        newNext.alt = 'Tablet_img';
        newNext.style.transform = 'translateX(100%)';
        newNext.style.position = 'absolute';
        newNext.style.top = '0';
        newNext.style.left = '0';
        newNext.style.width = '100%';
        newNext.addEventListener('click', () => this.zoomIn(this.listOfCertificates[this.current]));
        document.getElementById(parentElementId).appendChild(newNext);
      }
      x += 1;
    }, animationSpeed);
  }

  prevImg(x) {
    const { currentElementId, nextElementEd, prevElementId, parentElementId, animationSpeed} = this.animationConfig;
    const int = setInterval(() => {
      const current = document.getElementById(currentElementId);
      const prev = document.getElementById(prevElementId);
      current.style.transform = `translateX(${-x}%)`;
      prev.style.transform = `translateX(${-100 - x}%)`;
      if (x <= -100) {
        clearInterval(int);
        prev.style.position = 'relative';
        current.remove();
        prev.id = currentElementId;
        this.current = this.prevCurrent();
        document.getElementById(nextElementEd).setAttribute('src', this.listOfCertificates[this.nextCurrent()]);
        const newPrev = document.createElement('img');
        newPrev.id = prevElementId;
        newPrev.src = this.listOfCertificates[this.prevCurrent()];
        newPrev.alt = 'Tablet_img';
        newPrev.style.transform = 'translateX(-100%)';
        newPrev.style.position = 'absolute';
        newPrev.style.top = '0';
        newPrev.style.left = '0';
        newPrev.style.width = '100%';
        newPrev.addEventListener('click', () => this.zoomIn(this.listOfCertificates[this.current]));
        document.getElementById(parentElementId).appendChild(newPrev);
      }
      x -= 1;
    }, animationSpeed);
  }

  onPan(e) {
    const {prevElementId, currentElementId, nextElementEd, pxForSwipe} = this.animationConfig;
    if (e['additionalEvent'] && e['additionalEvent'] !== 'pandown' && e['additionalEvent'] !== 'panup') {
      this.animationConfig.counter++;
    }
    if (this.animationConfig.counter > 3) {
      const x = Math.round(e.deltaX / window.innerWidth * 100) * - 1;
      if (x >= 0) {
        const current = document.getElementById(currentElementId);
        const next = document.getElementById(nextElementEd);
        current.style.transform = `translateX(-${x}%)`;
        next.style.transform = `translateX(${100 - x}%)`;
      } else {
        const current = document.getElementById(currentElementId);
        const next = document.getElementById(prevElementId);
        current.style.transform = `translateX(${-x}%)`;
        next.style.transform = `translateX(${-100 - x}%)`;
      }
      if (e.isFinal) {
        if (Math.abs(e.deltaX) > pxForSwipe) {
          x > 0 ? this.nextImg(x) : this.prevImg(x);
        }
        if (Math.abs(e.deltaX) < pxForSwipe) {
          x > 0 ? this.backFromNext(x) : this.backFromPrev(x);
        }
        this.animationConfig.counter = 0;
      }
    }
  }

  backFromNext(x) {
    const { currentElementId, nextElementEd, animationSpeed} = this.animationConfig;
    const int = setInterval(() => {
      const current = document.getElementById(currentElementId);
      const next = document.getElementById(nextElementEd);
      current.style.transform = `translateX(${-x}%)`;
      next.style.transform = `translateX(${100 - x}%)`;
      if (x <= 0) {
        clearInterval(int);
      }
      x -= 1;
    }, animationSpeed);
  }

  backFromPrev(x) {
    const { currentElementId, prevElementId, animationSpeed} = this.animationConfig;
    const int = setInterval(() => {
      const current = document.getElementById(currentElementId);
      const prev = document.getElementById(prevElementId);
      current.style.transform = `translateX(${-x}%)`;
      prev.style.transform = `translateX(${-100 - x}%)`;
      if (x >= 0) {
        clearInterval(int);
      }
      x += 1;
    }, animationSpeed);
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
