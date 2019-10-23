import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  public listOfTeam = [
    {
      name: 'Артем Гарашко',
      position: 'Руководитель проекта Метабот',
      text: 'Для любого интернет-сервиса, web-магазина, служба заказов, онлайн-школы наличие каналов коммуникации в' +
        '  мессенджерах является важнейшим конкурентным преимуществом. Все такие каналы управляются чат-ботами.',
      imgUrl: 'assets/images/our-team/фото%20команда%201.png'
    },
    {
      name: 'Михаил Палей',
      position: 'Управляющий партнер',
      text: 'Чат-боты упрощают взаимодействие с пользователем на всех уровнях. Доносить' +
        ' свою мысль до людей становится намного проще. И я вижу огромный потенциал' +
        ' в этом инструменте для развития предпринимательства и социальной сферы',
      imgUrl: 'assets/images/our-team/WhatsApp_Image_2019-%20(2).png'
    },
    {
      name: 'Александр Гарашко',
      position: 'Архитектор и тимлид',
      text: 'Мы проектируем сложную, высоконагруженную платформу для асинхронных коммуникаций и уверены что наш продукт займет ' +
        'достойное место на рынке интеграционных решений и современных коммуникаций',
      imgUrl: 'assets/images/our-team/фото%20команда%203.png'
    },
    {
      name: 'TEST',
      position: 'TEST',
      text: 'TEST',
      imgUrl: 'assets/images/our-team/фото%20команда%203.png'
    }
  ];
  public currentList;
  public isMobile = false;

  constructor() { }

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
