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
    this.errorMessage = 'Holerite não encontrado, verifique o mês e ano informado!';
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }
}
