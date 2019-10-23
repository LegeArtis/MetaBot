import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-client-think',
  templateUrl: './client-think.component.html',
  styleUrls: ['./client-think.component.css']
})
export class ClientThinkComponent implements OnInit {
  @Output() openCallbackForm = new EventEmitter<boolean>();
  public text;
  public name;
  public subs;
  public imgSrc;
  public current = 0;
  public change = true;
  public commitArray = [
    {
      text: '"У нас в день очень много переписок — более 100 чатов с клиентами. Мне очень хотелось автоматизировать этот процесс,' +
        ' чтобы упростить жизнь менеджерам по продажам. Чтобы они могли сконцентрироваться на ведении клиента, а не на ответах на' +
        ' одни и те же вопросы. Очень удобно, что бот может отправлять фото, ссылки на посты. Если возникают дополнительные вопросы,' +
        ' то подключается менеджер. Я очень довольна!"',
      name: 'Лия',
      subs: 'SkyMap, Звездные карты',
      imgSrc: 'assets/images/client-think/фото%201%20отзыв.png'
    },
    {
      text: '"Я хотел использовать бот для того, чтобы коммуницировать с аудиторией через Telegram. Понятно, что сейчас люди все больше' +
        ' смещаются в мессенджеры, поэтому стояла задача начать общение с ними в полуавтоматическом режиме через бота. В результате мы' +
        ' совместно с Metabot реализовали проект, что дало существенный эффект. На данный момент на меня подписалось больше 5000 человек.' +
        ' Это дало хороший рывок вперед в плане методов взаимодействия с аудиторией. Спасибо за помощь в реализации моих идей,' +
        ' оперативной корректировке бота и, конечно, за плодотворное сотрудничество! Если вы хотите настроить своего чат-бота,' +
        ' обращайтесь в Metabot!"',
      name: 'Николай Мрочковский',
      subs: 'Финанс консалтинг',
      imgSrc: 'assets/images/client-think/Mask%20Group.png',
    }
  ];

  constructor() { }

  ngOnInit() {
    this.changeTo(0);
  }

  openCallback() {
    this.openCallbackForm.emit();
  }

  nextComment() {
    this.change = false;
    if (this.current < this.commitArray.length - 1) {
      this.changeTo(++this.current);
    } else {
      this.current = 0;
      this.changeTo(this.current);
    }
  }

  prevComment() {
    this.change = false;
    if (this.current === 0) {
      this.current = this.commitArray.length - 1;
      this.changeTo(this.current);
    } else {
      this.changeTo(--this.current);
    }
  }

  changeTo(index) {
    this.text = this.commitArray[index].text;
    this.subs = this.commitArray[index].subs;
    this.imgSrc = this.commitArray[index].imgSrc;
    this.name = this.commitArray[index].name;
  }

}
