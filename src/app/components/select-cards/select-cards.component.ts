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
      icon: 'fa-thin fa-money-check-dollar'
    },
    {
      name: 'Informe de rendimentos',
      icon: 'file-invoice-dollar'
    },
    {
      name: 'Agendamento de férias',
      icon: 'calendar-alt'
    },
    {
      name: 'Benefícios',
      icon: 'grin-alt'
    }
  ]
  constructor(
  ) {
    
  }

  ngOnInit() {
  }

}
