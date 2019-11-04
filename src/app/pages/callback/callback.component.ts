import {Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit, OnDestroy {
  @Output() callbackForm = new EventEmitter<boolean>();
  public submitted = false;
  public callback: FormGroup;
  public isSend = false;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    this.callback = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.email]],
      message: ['', Validators.required],
    },
      { validators: this.checkEmailOrPhone});
  }

  checkEmailOrPhone(group: FormGroup) {
    const phone = group.get('phone').value;
    const email = group.get('email').value;

    return phone || email ? null : { invalid: true };
  }
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  constructor(private service: DataService,
              private formBuilder: FormBuilder) { }

  close() {
    this.callbackForm.emit();
  }

  get check() {
    return this.callback.controls;
  }

  submit() {
    this.submitted = true;
    if (this.callback.invalid) {
      return;
    }

    const body = {
      name: this.check.name.value,
      email: this.check.email.value,
      phone: this.check.phone.value,
      message: this.check.message.value
    };

    this.service.sendMail(body).subscribe(value => {
        if (value['msg']) {
          this.isSend = true;
          setTimeout(() => {
            this.isSend = false;
          }, 3000);
      }
    }, error => {
      console.log(error);
    });
    this.callback.reset();
    this.submitted = false;
  }
}
