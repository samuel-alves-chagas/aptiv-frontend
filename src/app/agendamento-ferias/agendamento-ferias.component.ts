import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agendamento-ferias',
  templateUrl: './agendamento-ferias.component.html',
  styleUrls: ['./agendamento-ferias.component.css']
})
export class AgendamentoFeriasComponent {

  saida:string = "10/10/2023"
  retorno:string = "20/10/2023"
}
