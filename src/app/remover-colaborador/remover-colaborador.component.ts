import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remover-colaborador',
  templateUrl: './remover-colaborador.component.html',
  styleUrls: ['./remover-colaborador.component.css']
})
export class RemoverColaboradorComponent {

  constructor(
    private router: Router,
    
  ) {}

  backToPainel() {
    this.router.navigate([`../painelAdm`])
  }
}
