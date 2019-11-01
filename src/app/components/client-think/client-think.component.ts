import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

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
  public commitArray;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.get('Отзывы').subscribe(
      value => {
        this.commitArray = value;
        this.changeTo(0);
      }
    );
  }

  openCallback() {
    this.openCallbackForm.emit();
  }

  onSwipe(e) {
    const x = Math.abs(e.deltaX) > 40 ? (e.deltaX > 0 ? this.prevComment() : this.nextComment()) : '';
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
    this.text = this.commitArray[index].comment;
    this.subs = this.commitArray[index].position;
    this.imgSrc = this.commitArray[index].url;
    this.name = this.commitArray[index].name;
  }

}
