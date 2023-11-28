import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentoService } from '../services/documento/documento.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-holerite',
  templateUrl: './holerite.component.html',
  styleUrls: ['./holerite.component.css']
})
export class HoleriteComponent implements OnInit {
  public errorMessage: String
  public formBuscarHolerite!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private documentoService: DocumentoService
    
  ) {
    this.errorMessage = '';
  }

  ngOnInit() {
    this.formBuscarHolerite = this.formBuilder.group({
      mes: 1,
      ano: 2019
    })
  }
  
  download() {
    this.errorMessage = '';
    
    const user: any = localStorage.getItem('user');
    const received = this.formBuscarHolerite.getRawValue();

    const funcionario_id = JSON.parse(user).id
    const mes = received.mes;
    const ano = received.ano;

    const body = {
      funcionario_id: funcionario_id,
      tipo: "Holerite",
      data: {
        mes: mes,
        ano: ano
      }
    }

    this.documentoService.getDocumentoByDataEColaborador(body)
    .pipe(take(1)).subscribe((res: any) => {
      if (res && res.url_arquivo) {
        this.realizarDownload(res.url_arquivo)
        this.errorMessage = '';
      }
    },(error) => {
      this.errorMessage = 'Holerite não encontrado, verifique o mês e ano informado!';
    })
  }

  realizarDownload(url: string) {
    const link = document.createElement('a');
      link.href = url;

      // Adicionar o link ao corpo do documento
      document.body.appendChild(link);

      // Simular um clique no link para iniciar o download
      link.click();

      // Remover o link do corpo do documento após o download
      document.body.removeChild(link);
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }
  
}
