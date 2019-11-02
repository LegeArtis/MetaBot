import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-client-think',
  templateUrl: './client-think.component.html',
  styleUrls: ['./client-think.component.css']
})
export class ClientThinkComponent implements OnInit {
  public animationConfig = {
    animationSpeed: 5,
    pxForSwipe: 50,
    currentElementId: 'currentClient',
    prevElementId: 'prevClient',
    nextElementEd: 'nextClient',
    parentElementId: 'img_block_client'
  };
  public commitArray = [
    {
      comment: 'comment0',
      url: 'assets/images/trust-us/Alfa-Bank%201.png',
      name: 'name0',
      position: 'position0'
    },
    {
      comment: 'comment1',
      url: 'assets/images/trust-us/icon_CXI.png',
      name: 'name1',
      position: 'position1'
    },
    {
      comment: 'comment2',
      url: 'assets/images/trust-us/icon_min.png',
      name: 'name2',
      position: 'position2'
    },
    {
      comment: 'comment3',
      url: 'assets/images/trust-us/icon_umico.png',
      name: 'name3',
      position: 'position3'
    },
  ];

  @Output() openCallbackForm = new EventEmitter<boolean>();
  public current = 0;

  nextCurrent() {
    return this.commitArray.length - 1 > this.current ? this.current + 1 : 0;
  }

  prevCurrent() {
    return  this.current === 0 ? this.commitArray.length - 1 : this.current - 1;
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

        const prevEl = document.getElementById(prevElementId);
        const prevIndex = this.prevCurrent();
        prevEl.firstElementChild.setAttribute('src', this.commitArray[prevIndex].url);
        prevEl.lastElementChild.children[0].innerHTML =  this.commitArray[prevIndex].comment;
        prevEl.lastElementChild.children[1].innerHTML =  this.commitArray[prevIndex].name;
        prevEl.lastElementChild.children[2].innerHTML =  this.commitArray[prevIndex].position;

        const newNext = document.createElement('div');
        newNext.id = nextElementEd;
        newNext.style.transform = 'translateX(100%)';
        newNext.style.position = 'absolute';
        newNext.style.top = '0';
        newNext.style.left = '0';
        newNext.style.width = '100%';

        const newImg = document.createElement('img');
        newImg.src = this.commitArray[this.nextCurrent()].url;
        newImg.alt = 'Tablet_img';
        newImg.style.height = '200px';
        newImg.style.width = '200px';
        newImg.style.borderRadius = '100px';

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'think_block_text');
        newDiv.style.minWidth = '250px';
        newDiv.style.maxWidth = '750px';
        newDiv.style.width = '100%';
        newDiv.style.marginLeft = '20px';

        const pComment = document.createElement('p');
        pComment.innerText = this.commitArray[this.nextCurrent()].comment;
        pComment.style.fontSize = '18px';
        pComment.style.lineHeight = '28px';
        pComment.style.fontWeight = '200';
        pComment.style.marginBottom = '30px';

        const pName = document.createElement('p');
        pName.innerText = this.commitArray[this.nextCurrent()].name;
        pName.style.fontWeight = 'bold';
        pName.style.fontSize = '18px';

        const pPosition = document.createElement('p');
        pPosition.innerText = this.commitArray[this.nextCurrent()].position;
        pPosition.style.fontSize = '16px';
        pPosition.style.fontWeight = '100';

        newDiv.appendChild(pComment);
        newDiv.appendChild(pName);
        newDiv.appendChild(pPosition);

        newNext.appendChild(newImg);
        newNext.appendChild(newDiv);
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

        const nextEl = document.getElementById(nextElementEd);
        const nextIndex = this.prevCurrent();
        nextEl.firstElementChild.setAttribute('src', this.commitArray[nextIndex].url);
        nextEl.lastElementChild.children[0].innerHTML =  this.commitArray[nextIndex].comment;
        nextEl.lastElementChild.children[1].innerHTML =  this.commitArray[nextIndex].name;
        nextEl.lastElementChild.children[2].innerHTML =  this.commitArray[nextIndex].position;

        const newPrev = document.createElement('div');
        newPrev.id = prevElementId;
        newPrev.style.transform = 'translateX(-100%)';
        newPrev.style.position = 'absolute';
        newPrev.style.top = '0';
        newPrev.style.left = '0';
        newPrev.style.width = '100%';

        const newImg = document.createElement('img');
        newImg.src = this.commitArray[this.nextCurrent()].url;
        newImg.alt = 'Tablet_img';
        newImg.style.height = '200px';
        newImg.style.width = '200px';
        newImg.style.borderRadius = '100px';

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'think_block_text');
        newDiv.style.minWidth = '250px';
        newDiv.style.maxWidth = '750px';
        newDiv.style.width = '100%';
        newDiv.style.marginLeft = '20px';

        const pComment = document.createElement('p');
        pComment.innerText = this.commitArray[this.nextCurrent()].comment;
        pComment.style.fontSize = '18px';
        pComment.style.lineHeight = '28px';
        pComment.style.fontWeight = '200';
        pComment.style.marginBottom = '30px';

        const pName = document.createElement('p');
        pName.innerText = this.commitArray[this.nextCurrent()].name;
        pName.style.fontWeight = 'bold';
        pName.style.fontSize = '18px';

        const pPosition = document.createElement('p');
        pPosition.innerText = this.commitArray[this.nextCurrent()].position;
        pPosition.style.fontSize = '16px';
        pPosition.style.fontWeight = '100';

        newDiv.appendChild(pComment);
        newDiv.appendChild(pName);
        newDiv.appendChild(pPosition);

        newPrev.appendChild(newImg);
        newPrev.appendChild(newDiv);
        document.getElementById(parentElementId).appendChild(newPrev);
      }
      x -= 1;
    }, this.animationConfig.animationSpeed);
  }

  onPan(e) {
    const {prevElementId, currentElementId, nextElementEd, pxForSwipe} = this.animationConfig;
    const x = Math.round(e.deltaX / window.innerWidth * 100) * -1;
    if ( x >= 0) {
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


  constructor(private service: DataService) { }

  ngOnInit() {
    // this.service.get('Отзывы').subscribe(
    //   value => {
    //     this.commitArray = value;
    //     // this.changeTo(0);
    //   }
    // );
  }

  openCallback() {
    this.openCallbackForm.emit();
  }

  // onSwipe(e) {
  //   const x = Math.abs(e.deltaX) > 40 ? (e.deltaX > 0 ? this.prevComment() : this.nextComment()) : '';
  // }
  //
  // nextComment() {
  //   this.change = false;
  //   if (this.current < this.commitArray.length - 1) {
  //     this.changeTo(++this.current);
  //   } else {
  //     this.current = 0;
  //     this.changeTo(this.current);
  //   }
  // }
  //
  // prevComment() {
  //   this.change = false;
  //   if (this.current === 0) {
  //     this.current = this.commitArray.length - 1;
  //     this.changeTo(this.current);
  //   } else {
  //     this.changeTo(--this.current);
  //   }
  // }
  //
  // changeTo(index) {
  //   this.text = this.commitArray[index].comment;
  //   this.subs = this.commitArray[index].position;
  //   this.imgSrc = this.commitArray[index].url;
  //   this.name = this.commitArray[index].name;
  // }

}
