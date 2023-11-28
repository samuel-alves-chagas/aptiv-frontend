import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentoService } from '../services/documento/documento.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-informe-rendimentos',
  templateUrl: './informe-rendimentos.component.html',
  styleUrls: ['./informe-rendimentos.component.css']
})
export class InformeRendimentosComponent implements OnInit {
  public errorMessage: String
  public formBuscarInformeDeRendimentos!: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private documentoService: DocumentoService
  ) {
    this.errorMessage = '';
  }
  ngOnInit(): void {
    this.formBuscarInformeDeRendimentos = this.formBuilder.group({
      ano: 2019
    })
  }
  download() {
    this.errorMessage = '';

    const user: any = localStorage.getItem('user');
    const dadosDoFormulario = this.formBuscarInformeDeRendimentos.getRawValue();

    const funcionario_id = JSON.parse(user).id
    const mes = dadosDoFormulario.mes;
    const ano = dadosDoFormulario.ano;

    const body = {
      funcionario_id: funcionario_id,
      tipo: "Informe de rendimentos",
      data: {
        ano: ano
      }
    }

    this.documentoService.getDocumentoByDataEColaborador(body)
    .pipe(take(1)).subscribe((res: any) => {
      if (res) {
        this.realizarDownload(res.url_arquivo)
        this.errorMessage = "";
      }
    },(error) => {
      this.errorMessage = 'Informe de rendimentos não encontrado, verifique o ano informado!';
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
