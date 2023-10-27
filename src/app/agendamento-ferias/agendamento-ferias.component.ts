import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento-ferias',
  templateUrl: './agendamento-ferias.component.html',
  styleUrls: ['./agendamento-ferias.component.css']
})
export class AgendamentoFeriasComponent {

  saida:string = "10/10/2023"
  retorno:string = "20/10/2023"

  constructor(
    private router: Router,
    
  ) {}
 
  backToPainel() {
    this.router.navigate([`../home`])
  }
}
