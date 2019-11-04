import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trust-us',
  templateUrl: './trust-us.component.html',
  styleUrls: ['./trust-us.component.css']
})
export class TrustUsComponent implements OnInit {
  public animationConfig = {
    animationSpeed: 5,
    pxForSwipe: 50,
    currentElementId: 'currentTrust',
    prevElementId: 'prevTrust',
    nextElementEd: 'nextTrust',
    parentElementId: 'img_block_trust',
    counter: 0
  };
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

  nextCurrent() {
    return this.listOfTrust.length - 1 > this.current ? this.current + 1 : 0;
  }

  prevCurrent() {
    return  this.current === 0 ? this.listOfTrust.length - 1 : this.current - 1;
  }

  nextImg(x) {
    const {prevElementId, currentElementId, nextElementEd, parentElementId} = this.animationConfig;
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
        document.getElementById(prevElementId).setAttribute('src', this.listOfTrust[this.prevCurrent()]);
        const newNext = document.createElement('img');
        newNext.id = nextElementEd;
        newNext.src = this.listOfTrust[this.nextCurrent()];
        newNext.alt = 'Tablet_img';
        newNext.style.transform = 'translateX(100%)';
        newNext.style.position = 'absolute';
        newNext.style.top = '0';
        newNext.style.left = '0';
        newNext.style.width = '100%';
        document.getElementById(parentElementId).appendChild(newNext);
      }
      x += 1;
    }, this.animationConfig.animationSpeed);
  }

  prevImg(x) {
    const {prevElementId, currentElementId, nextElementEd, parentElementId} = this.animationConfig;
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
        document.getElementById(nextElementEd).setAttribute('src', this.listOfTrust[this.nextCurrent()]);
        const newPrev = document.createElement('img');
        newPrev.id = prevElementId;
        newPrev.src = this.listOfTrust[this.prevCurrent()];
        newPrev.alt = 'Tablet_img';
        newPrev.style.transform = 'translateX(-100%)';
        newPrev.style.position = 'absolute';
        newPrev.style.top = '0';
        newPrev.style.left = '0';
        newPrev.style.width = '100%';
        document.getElementById(parentElementId).appendChild(newPrev);
      }
      x -= 1;
    }, this.animationConfig.animationSpeed);
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

}
