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
      icon: ''
    },
    {
      name: 'Informe de rendimentos',
      icon: ''
    },
    {
      name: 'Agendamento de férias',
      icon: ''
    },
    {
      name: 'Benefícios',
      icon: ''
    }
  ]
  constructor(
  ) {
    
  }

  ngOnInit() {
  }

}
