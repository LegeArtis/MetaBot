import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.css']
})
export class SecretPageComponent implements OnInit {
  public isSignIn = false;
  public pass = null;
  public errorPass = false;
  public isChangePass = false;
  public changePassForm: FormGroup;
  public errorConfirm = false;
  public commentList;
  public teamList;

  constructor(private service: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCommit();
    this.getTeam();
    this.changePassForm = this.formBuilder.group({
      pass: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  getCommit() {
    this.service.get('Отзывы').subscribe(value => {
      this.commentList = value;
    }, error => {
      console.log(error);
    });
  }

  getTeam() {
    this.service.get('Команда').subscribe(value => {
      this.teamList = value;
    }, error => {
      console.log(error);
    });
  }

  signIn(pass) {
    this.service.signIn(pass).subscribe(
      (value) => {
        this.pass = pass;
        this.errorPass = false;
        this.isSignIn = true;
    },
        error => {
      this.errorPass = true;
    });
  }

  get f() {
    return this.changePassForm.controls;
  }

  exit() {
   this.pass = null;
   this.isSignIn = false;
  }

  changePass() {
    const newPass = this.changePassForm.get('pass').value;
    const newPassConfirm = this.changePassForm.get('confirm').value;
    this.errorConfirm = !(newPassConfirm === newPass);
    if (this.changePassForm.invalid || this.errorConfirm) {
      return;
    }
    this.service.changePass({
      pass: this.pass,
      newPass: newPass
    }).subscribe(value => {
      this.exit();
    });
  }
}
