import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informe-rendimentos',
  templateUrl: './informe-rendimentos.component.html',
  styleUrls: ['./informe-rendimentos.component.css']
})
export class InformeRendimentosComponent {

  constructor(
    private router: Router,
    
  ) {}
  download() {
    
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }
}
