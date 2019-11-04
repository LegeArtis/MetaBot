import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  public animationConfig = {
    animationSpeed: 5,
    pxForSwipe: 100,
    currentElementId: 'current',
    prevElementId: 'prev',
    nextElementEd: 'next',
    parentElementId: 'img block',
    counter: 0
  };
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
  public next = 1;
  public prev = 2;
  public isMobile = false;
  @Output() openCallbackFrom = new EventEmitter<boolean>();

  constructor() { }

  callbackFormMethod() {
    this.openCallbackFrom.emit();
  }

  ngOnInit() {
    if (window.innerWidth <= 768 || window.innerWidth < window.innerHeight) {
      this.isMobile = true;
    }
  }

  nextImgDesk() {
    let x = 0;
    const int = setInterval(() => {
      const current = document.getElementById('currentDesktop');
      const next = document.getElementById('nextDesktop');
      current.style.transform = `translateX(-${x}%)`;
      next.style.transform = `translateX(${100 - x}%)`;
      if (x >= 100) {
        clearInterval(int);
        next.style.position = 'relative';
        current.remove();
        next.id = 'currentDesktop';
        this.current = this.nextCurrent();
        document.getElementById('prevDesktop').setAttribute('src', this.listImgDesktop[this.prevCurrent()]);
        const newNext = document.createElement('img');
        newNext.id = 'nextDesktop';
        newNext.src = this.listImgDesktop[this.nextCurrent()];
        newNext.alt = 'Desktop_img';
        newNext.style.transform = 'translateX(100%)';
        newNext.style.position = 'absolute';
        newNext.style.top = '0';
        newNext.style.left = '0';
        newNext.style.width = '100%';
        document.getElementById('img_desk_block').appendChild(newNext);
      }
      x += 1;
    }, this.animationConfig.animationSpeed);
  }

  prevImgDesk() {
    let x = 0;
    const int = setInterval(() => {
      const current = document.getElementById('currentDesktop');
      const prev = document.getElementById('prevDesktop');
      current.style.transform = `translateX(${x}%)`;
      prev.style.transform = `translateX(${-100 + x}%)`;
      if (x >= 100) {
        clearInterval(int);
        prev.style.position = 'relative';
        current.remove();
        prev.id = 'currentDesktop';
        this.current = this.prevCurrent();
        document.getElementById('nextDesktop').setAttribute('src', this.listImgDesktop[this.nextCurrent()]);
        const newPrev = document.createElement('img');
        newPrev.id = 'prevDesktop';
        newPrev.src = this.listImgDesktop[this.prevCurrent()];
        newPrev.alt = 'Desktop_img';
        newPrev.style.transform = 'translateX(-100%)';
        newPrev.style.position = 'absolute';
        newPrev.style.top = '0';
        newPrev.style.left = '0';
        newPrev.style.width = '100%';
        document.getElementById('img_desk_block').appendChild(newPrev);
      }
      x += 1;
    }, this.animationConfig.animationSpeed);
  }

  nextCurrent() {
    return this.listImgTablet.length - 1 > this.current ? this.current + 1 : 0;
  }

  prevCurrent() {
    return  this.current === 0 ? this.listImgTablet.length - 1 : this.current - 1;
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
        document.getElementById(prevElementId).setAttribute('src', this.listImgTablet[this.prevCurrent()]);
        const newNext = document.createElement('img');
        newNext.id = nextElementEd;
        newNext.src = this.listImgTablet[this.nextCurrent()];
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
        document.getElementById(nextElementEd).setAttribute('src', this.listImgTablet[this.nextCurrent()]);
        const newPrev = document.createElement('img');
        newPrev.id = prevElementId;
        newPrev.src = this.listImgTablet[this.prevCurrent()];
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
    if (e['additionalEvent'] && e['additionalEvent'] !== 'pandown') {
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
