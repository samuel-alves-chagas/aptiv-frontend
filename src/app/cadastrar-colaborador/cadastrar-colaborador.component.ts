import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrls: ['./cadastrar-colaborador.component.css']
})
export class CadastrarColaboradorComponent {
  public formCadastrarColaborador: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    
  ) {
    this.formCadastrarColaborador = this.formBuilder.group({
      nome: [null],
      dataDeAdmissao: [null],
      unidade: [null],
      cargo: [null],
      departamento: [null],
      perfilDeAcesso: [null],
      dataDeNascimento: [null]

    })
  }

  cadastrar() {
    console.log(this.formCadastrarColaborador)
  }

  backToPainel() {
    this.router.navigate([`../painelAdm`])
  }
}
