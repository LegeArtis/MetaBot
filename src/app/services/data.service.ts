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
}
