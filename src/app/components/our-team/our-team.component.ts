import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  public listOfTeam;
  public currentList;
  public isMobile = false;
  public isLoad = false;

  constructor(private service: DataService) { }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
    this.service.get('Команда').subscribe(
      value => {
        this.listOfTeam = value;
        this.currentList = [...this.listOfTeam.slice(0, 3)];
        this.isLoad = true;
      }
    );
  }

  toggleMore() {
    if (this.currentList.length <= 3) {
      this.currentList = [...this.listOfTeam];
    } else {
      this.currentList = this.listOfTeam.slice(0, 3);
    }
  }
}
