import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-cards',
  templateUrl: './select-cards.component.html',
  styleUrls: ['./select-cards.component.css']
})
export class SelectCardsComponent implements OnInit {
  @Input() role!: string;

  modules = [
    {
      name: 'Holerites',
      icon: ['fa-solid','fa-money-check-dollar'],
      path: '/holerite',
      visible: true

    },
    {
      name: 'Informe de rendimentos',
      icon: ['fa-solid','fa-file-invoice-dollar'],
      path: '/informe-rendimentos',
      visible: true

    },
    {
      name: 'Agendamento de férias',
      icon: ['fa-solid','fa-calendar-days'],
      path: '/agendamento-ferias',
      visible: true

      
    },
    {
      name: 'Benefícios',
      icon: ['fa-solid','fa-grin-alt'],
      path: '/beneficios',
      visible: true

    },
    {
      name: 'Painel administrativo',
      icon: ['fa-solid','fa-grin-alt'],
      path: '/painelAdm',
      visible: false
    },
  ]
  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit() {
    if (this.role === "admin") {
      this.modules[4].visible = true
    }
  }

  redirectTo(path: any) {
    this.router.navigate([`../` + path])
  }
}
