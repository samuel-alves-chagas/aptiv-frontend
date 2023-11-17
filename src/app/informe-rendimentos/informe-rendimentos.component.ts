import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informe-rendimentos',
  templateUrl: './informe-rendimentos.component.html',
  styleUrls: ['./informe-rendimentos.component.css']
})
export class InformeRendimentosComponent {
  public errorMessage: String

  constructor(
    private router: Router,
    
  ) {
    this.errorMessage = '';
  }
  download() {
    this.errorMessage = 'Informe de rendimentos não encontrado, verifique o ano informado!';
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }
}
