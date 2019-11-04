import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-client-think',
  templateUrl: './client-think.component.html',
  styleUrls: ['./client-think.component.css']
})
export class ClientThinkComponent {
  public animationConfig = {
    animationSpeed: 5,
    pxForSwipe: 50,
    currentElementId: 'currentClient',
    prevElementId: 'prevClient',
    nextElementEd: 'nextClient',
    parentElementId: 'img_block_client',
    counter: 0
  };
  @Output() openCallbackForm = new EventEmitter<boolean>();
  public current = 0;
  public commitArray = [
    {
      "_id":"5db474ec24c9680d3c78c65d",
      "name":"Лия",
      "position":"SkyMap , Звездные карты",
      "comment":"\"У нас в день очень много переписок — более 100 чатов с клиентами. Мне очень хотелось автоматизировать этот процесс, чтобы упростить жизнь менеджерам по продажам. Чтобы они могли сконцентрироваться на ведении клиента, а не на ответах на одни и те же вопросы. Очень удобно, что бот может отправлять фото, ссылки на посты. Если возникают дополнительные вопросы, то подключается менеджер. Я очень довольна!\"\n",
      "url":'assets/img/1572107500396-Фото мини.png',
      "__v":0
    }, {
      "_id":"5db4756f24c9680d3c78c65e",
      "name":"Николай Мрочковский",
      "position":"Финанс консалтинг",
      "comment":"“Я хотел использовать бот для того, чтобы коммуницировать с аудиторией через Telegram. Понятно, что сейчас люди все больше смещаются в мессенджеры, поэтому стояла задача начать общение с ними в полуавтоматическом режиме через бота. В результате мы совместно с Metabot реализовали проект, что дало существенный эффект. На данный момент на меня подписалось больше 5000 человек. Это дало хороший рывок вперед в плане методов взаимодействия с аудиторией. Спасибо за помощь в реализации моих идей, оперативной корректировке бота и, конечно, за плодотворное сотрудничество! Если вы хотите настроить своего чат-бота, обращайтесь в Metabot!\"\n",
      "url":"assets/img/mask.jpg",
      "__v":0
    }
  ];



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
        newImg.style.position = 'relative';
        if (window.innerWidth < 460) {
          newImg.style.left = '50%';
          newImg.style.transform = 'translateX(-50%)';
        }


        const newDiv = document.createElement('div');
        newDiv.style.minWidth = '250px';
        newDiv.style.maxWidth = '750px';
        newDiv.style.width = '100%';

        if (window.innerWidth > 460) {
          newImg.style.cssFloat = 'left';
          newDiv.style.cssFloat = 'right';
        }

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
        newImg.style.position = 'relative';
        if (window.innerWidth < 460) {
          newImg.style.left = '50%';
          newImg.style.transform = 'translateX(-50%)';
        }

        const newDiv = document.createElement('div');
        newDiv.style.minWidth = '250px';
        newDiv.style.maxWidth = '750px';
        newDiv.style.width = '100%';

        if (window.innerWidth > 460) {
          newImg.style.cssFloat = 'left';
          newDiv.style.cssFloat = 'right';
        }

        const pComment = document.createElement('p');
        pComment.innerText = this.commitArray[this.nextCurrent()].comment;
        pComment.style.fontSize = '18px';
        pComment.style.lineHeight = '28px';
        pComment.style.fontWeight = '200';
        pComment.style.marginBottom = '30px';
        pComment.style.width = '100%';

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

  openCallback() {
    this.openCallbackForm.emit();
  }
}
