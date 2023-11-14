import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holerite',
  templateUrl: './holerite.component.html',
  styleUrls: ['./holerite.component.css']
})
export class HoleriteComponent {
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
