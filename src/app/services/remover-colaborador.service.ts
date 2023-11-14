import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RemoverColaboradorService {

  constructor(private http: HttpClient) { }

  listarColaboradores() {
    return this.http.get(`${enviroment.loginUrl}/colaborador`);
  }

  deletarColaborador(id: number) {
    return this.http.delete(`${enviroment.loginUrl}/colaborador/${id}`);
  }
}
