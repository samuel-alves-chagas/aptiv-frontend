import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent {

  constructor(
    private router: Router,
    
  ) {}

  backToPainel() {
    this.router.navigate([`../home`])
  }
}
