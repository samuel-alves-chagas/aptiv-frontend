import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }

  cadastrar(body: any) {
    return this.http.post(`${enviroment.loginUrl}/colaborador`, body)
  }

  listarColaboradores() {
    return this.http.get(`${enviroment.loginUrl}/colaborador`);
  }

  deletarColaborador(id: number) {
    return this.http.delete(`${enviroment.loginUrl}/colaborador/${id}`);
  }

  getBeneficiosByColaborador(id: string){
    return this.http.get(`${enviroment.loginUrl}/colaborador/beneficio/${id}`);

  }

  getFeriasByColaborador(id: string){
    return this.http.get(`${enviroment.loginUrl}/colaborador/ferias/${id}`);

  }
}
