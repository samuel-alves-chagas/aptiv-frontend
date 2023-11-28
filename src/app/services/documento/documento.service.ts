import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http: HttpClient) { }

  getDocumentoByDataEColaborador(body: any){
    return this.http.post(`${enviroment.loginUrl}/documentoByDate`, body)
  }
}
