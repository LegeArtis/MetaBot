import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  @Input() public config;
  @Output() public emitter = new EventEmitter();
  public formGroup: FormGroup;
  public submitted = false;
  public isSend = false;
  public isOpen = false;
  @Output() public refreshList = new EventEmitter();

  constructor(private service: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      comment: ['', Validators.required],
      file: [''],
    });
  }

  onSubmit(file) {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('name', this.formGroup.get('name').value);
    formData.append('position', this.formGroup.get('position').value);
    formData.append('comment', this.formGroup.get('comment').value);
    formData.append('file', this.formGroup.get('file').value);
    formData.append('pass', this.config.pass);
    formData.append('target', this.config.target);
    this.service.addData(formData).subscribe(value => {
      this.formGroup.reset();
      file.value = '';
      this.submitted = false;
      this.isSend = true;
      this.refreshList.next();
      setTimeout(() => {
        this.isSend = false;
      }, 3000);
    }, error => {
      console.log(error.statusText);
      this.emitter.next();
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formGroup.get('file').setValue(file);
    }
  }

  titleClick() {
    this.isOpen = !this.isOpen;
  }
}
