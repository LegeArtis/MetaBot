import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  @Input() public config;
  @Input() public itemList;
  @Output() public emitter = new EventEmitter();
  public isOpen = false;
  public currentItem = null;
  public isDelete = false;

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  titleClick() {
    this.isOpen = !this.isOpen;
  }

  setCurrentItem(item) {
    this.currentItem = item;
    this.isDelete = true;
  }

  delete() {
    this.isDelete = false;
    this.service.remove({
      id: this.currentItem._id,
      ...this.config
    }).subscribe(value => {
      this.emitter.next();
    }, error => {
      console.log(error);
    });
  }
}
