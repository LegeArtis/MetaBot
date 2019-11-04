import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  public listOfTeam = [
    {
      "_id":"1",
      "name":"Артем Гарашко",
      "position":"Руководитель проекта Метабот",
      "comment":"Для любого интернет-сервиса, web-магазина, службы заказов, онлайн-школы наличие каналов коммуникации в мессенджерах является важнейшим конкурентным преимуществом. Все такие каналы управляются чат-ботами.",
      "url":"assets/img/фото команда 1.png",
      "__v":0
    }, {
      "_id":"2",
      "name":"Михаил Палей",
      "position":"Управляющий партнер",
      "comment":"Чат-боты упрощают взаимодействие с пользователем на всех уровнях. Доносить\n свою мысль до людей становится намного проще. И я вижу огромный потенциал\n в этом инструменте для развития предпринимательства и социальной сферы",
      "url":"assets/img/1572111825811-микрофон.png",
      "__v":0
    }, {
      "_id":"3",
      "name":"Александр Гарашко",
      "position":"Архитектор и тимлид",
      "comment":"Мы проектируем сложную, высоконагруженную платформу для асинхронных коммуникаций и уверены что наш продукт займет достойное место на рынке интеграционных решений и современных коммуникаций",
      "url":"assets/img/фото команда 3.png",
      "__v":0
    }
  ];
  public currentList;
  public isMobile = false;

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
    this.currentList = [...this.listOfTeam.slice(0, 3)];
  }

  toggleMore() {
    if (this.currentList.length <= 3) {
      this.currentList = [...this.listOfTeam];
    } else {
      this.currentList = this.listOfTeam.slice(0, 3);
    }
  }
}
