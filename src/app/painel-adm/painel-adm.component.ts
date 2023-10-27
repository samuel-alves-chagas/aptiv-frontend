import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-adm',
  templateUrl: './painel-adm.component.html',
  styleUrls: ['./painel-adm.component.css']
})
export class PainelAdmComponent {
  constructor(
    private router: Router,
    
  ) {}

  cadastrarColaborador() {
    this.router.navigate([`../cadastrarColaborador`])
  }
  removerColaborador() {
    this.router.navigate([`../removerColaborador`])
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }

}
