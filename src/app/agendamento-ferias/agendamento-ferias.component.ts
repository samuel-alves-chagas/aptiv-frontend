import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { take } from 'rxjs';
import { formatDate, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';import { format } from 'date-fns';
 registerLocaleData(ptBr);
@Component({
  selector: 'app-agendamento-ferias',
  templateUrl: './agendamento-ferias.component.html',
  styleUrls: ['./agendamento-ferias.component.css']
})
export class AgendamentoFeriasComponent implements OnInit{

  saida: any;
  retorno: any;

  constructor(
    private router: Router,
    private colaboradorService: ColaboradorService
    
  ) {}

  ngOnInit(): void {
    this.getFerias();
  }

  getFerias() {
    const user: any = localStorage.getItem('user');
    console.debug(user)

    this.colaboradorService.getFeriasByColaborador(JSON.parse(user).id)
    .pipe(take(1)).subscribe((res: any) => {
      console.log(res)
      const ferias = res.historico_ferias.map((e: any) => {
        if(e.status == 'Em análise') {
          this.saida = format(new Date(e.data_inicio), 'dd/MM/yyyy')
          this.retorno = format(new Date(e.data_fim), 'dd/MM/yyyy')
        }
      })
    })
  }
 
  backToPainel() {
    this.router.navigate([`../home`])
  }
}
