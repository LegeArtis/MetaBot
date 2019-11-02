import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bot',
  templateUrl: './demo-bot.component.html',
  styleUrls: ['./demo-bot.component.css']
})
export class DemoBotComponent implements OnInit {
  public telegramUrl = '';
  public whatsUpUrl = '';

  constructor() { }

  ngOnInit() {
  }

}
