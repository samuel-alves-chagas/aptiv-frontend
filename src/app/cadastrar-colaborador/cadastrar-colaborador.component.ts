import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrls: ['./cadastrar-colaborador.component.css']
})
export class CadastrarColaboradorComponent implements OnInit {
  public formCadastrarColaborador!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    
  }
  ngOnInit() {
    this.formCadastrarColaborador = this.formBuilder.group({
      nome: null,
      dataDeAdmissao: null,
      unidade: null,
      cargo: null,
      departamento: null,
      perfilDeAcesso: null,
      dataDeNascimento: null,
      enderecoCep: null,
      enderecoLogradouro: null,
      enderecoBairro: null,
      enderecoCidade: null,
      enderecoEstado: null,
      enderecoPais: null,
      telefone: null,
      email: null,
      cpf: null,
      salario: null,
      descontos: this.formBuilder.array([]),
      beneficios: this.formBuilder.array([]),
      competencias: this.formBuilder.array([]),
      registro: null,
      senha: null
    })
  }

  
  cadastrar() {
    console.log(this.formCadastrarColaborador)
  }

  backToPainel() {
    this.router.navigate([`../painelAdm`])
  }

  addDesconto() {
    const descontosArray = this.formCadastrarColaborador.get('descontos') as FormArray;
    console.debug('descontosArray => ', descontosArray)
    descontosArray.push(this.formBuilder.group({
      tipoDesconto: '',
      valorDesconto: null,
    }));
  }  

  removeDesconto(index: number) {
    const descontosArray = this.formCadastrarColaborador.get('descontos') as FormArray;
    descontosArray.removeAt(index);
  }

  addBeneficio() {
    const novoBeneficio = this.formBuilder.group({
      tipoBeneficio: '',
      valorBeneficio: null,
    });
    
    (this.formCadastrarColaborador.get('beneficios') as FormArray).push(novoBeneficio);
  }  

  removeBeneficio(index: number) {
    const beneficiosArray = this.formCadastrarColaborador.get('beneficios') as FormArray;
    beneficiosArray.removeAt(index);
  }

  getBeneficios() {
    const beneficiosArray = this.formCadastrarColaborador.get('beneficios') as FormArray;
    return beneficiosArray.controls;
  }

  getDescontos() {
    const descontosArray = this.formCadastrarColaborador.get('descontos') as FormArray;
    return descontosArray.controls;
  }

  getCompetencias() {
    const competenciasArray = this.formCadastrarColaborador.get('competencias') as FormArray;
    return competenciasArray.controls;
  }

  addCompetencia() {
    (this.formCadastrarColaborador.get('competencias') as FormArray).push('');
  }  

  removeCompetencia(index: number) {
    const beneficiosArray = this.formCadastrarColaborador.get('competencias') as FormArray;
    beneficiosArray.removeAt(index);
  }
}
