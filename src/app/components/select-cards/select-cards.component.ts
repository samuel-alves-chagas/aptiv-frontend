import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-cards',
  templateUrl: './select-cards.component.html',
  styleUrls: ['./select-cards.component.css']
})
export class SelectCardsComponent implements OnInit {

  modules = [
    {
      name: 'Holerites',
      icon: ['fa-solid','fa-money-check-dollar'],
      path: '/holerite'

    },
    {
      name: 'Informe de rendimentos',
      icon: ['fa-solid','fa-file-invoice-dollar'],
      path: '/informe-rendimentos'
    },
    {
      name: 'Agendamento de férias',
      icon: ['fa-solid','fa-calendar-days'],
      path: '/agendamento-ferias'
      
    },
    {
      name: 'Benefícios',
      icon: ['fa-solid','fa-grin-alt'],
      path: '/beneficios'
    },
    {
      name: 'Painel administrativo',
      icon: ['fa-solid','fa-grin-alt'],
      path: '/painelAdm'
    },
  ]
  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit() {

  }

  redirectTo(path: any) {
    this.router.navigate([`../` + path])
  }
}
