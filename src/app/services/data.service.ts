import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  sendMail(data) {
    return  this.http.post(`${environment.apiUrl}/send-mail`, data);
  }

  signIn(pass) {
    return this.http.post(`${environment.apiUrl}/check`, { pass });
  }

  addData(data) {
    return  this.http.post(`${environment.apiUrl}/add-data`, data);
  }

  remove(data) {
    return this.http.post(`${environment.apiUrl}/remove`, data);
  }

  get(param) {
    return this.http.get(`${environment.apiUrl}/get/${param}`);
  }

  changePass(data) {
    return this.http.post(`${environment.apiUrl}/change-pass`, data);
  }
}
