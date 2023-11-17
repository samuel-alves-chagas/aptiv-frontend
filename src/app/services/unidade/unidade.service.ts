import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }

  listarUnidades() {
    return this.http.get(`${enviroment.loginUrl}/unidade`);
  }
}
