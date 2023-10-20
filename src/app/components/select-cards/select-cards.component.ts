import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-cards',
  templateUrl: './select-cards.component.html',
  styleUrls: ['./select-cards.component.css']
})
export class SelectCardsComponent implements OnInit {

  modules = [
    {
      name: 'Holerites',
      icon: ['fa-solid','fa-money-check-dollar']
    },
    {
      name: 'Informe de rendimentos',
      icon: ['fa-solid','fa-file-invoice-dollar']
    },
    {
      name: 'Agendamento de férias',
      icon: ['fa-solid','fa-calendar-days']
    },
    {
      name: 'Benefícios',
      icon: ['fa-solid','fa-grin-alt']
    }
  ]
  constructor(
  ) {
    
  }

  ngOnInit() {
  }

}
