import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit{

  beneficios: any = [];
  constructor(
    private router: Router,
    private colaboradorService: ColaboradorService
    
  ) {}

  ngOnInit(): void {
    this.getBeneficios();
  }

  getBeneficios() {
    const user: any = localStorage.getItem('user');
    console.debug(user)

    this.colaboradorService.getBeneficiosByColaborador(JSON.parse(user).id)
    .pipe(take(1)).subscribe(res => {
      this.beneficios = res
    })
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }
}
