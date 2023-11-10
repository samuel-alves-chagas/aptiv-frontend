import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body: any) {
    return this.http.post(`${enviroment.loginUrl}/login`, body)
  }
}
