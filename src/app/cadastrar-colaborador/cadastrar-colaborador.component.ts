import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrls: ['./cadastrar-colaborador.component.css']
})
export class CadastrarColaboradorComponent implements OnInit {
  public formCadastrarColaborador!: FormGroup
  public perfisDeAcesso = ['Padrão', 'Administrativo'];
  public unidades = ['Conceição dos Outros', 'Paraisópolis', 'Es. Santo do Pinhal'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }
  ngOnInit() {
    this.formCadastrarColaborador = this.formBuilder.group({
      nome: [null, [Validators.required]],
      dataDeAdmissao: [null, [Validators.required]],
      unidade: [null, [Validators.required]],
      cargo: [null, [Validators.required]],
      departamento: [null, [Validators.required]],
      perfilDeAcesso: [null, [Validators.required]],
      dataDeNascimento: [null, [Validators.required]],
      enderecoCep: [null, [Validators.required]],
      enderecoLogradouro: [null, [Validators.required]],
      enderecoBairro: [null, [Validators.required]],
      enderecoCidade: [null, [Validators.required]],
      enderecoEstado: [null, [Validators.required]],
      enderecoPais: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      /*
      salario: [null, [Validators.required]],
      descontos: this.formBuilder.array([this.formBuilder.group({
        tipoDesconto: ['', [Validators.required]],
        valorDesconto: [null, [Validators.required]],
      })]),
      beneficios: this.formBuilder.array([null]),
      competencias: this.formBuilder.array([this.formBuilder.group({
        competencia: ''
      })]),
      */
      registro: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })

    console.debug('ONINIT => ', this.formCadastrarColaborador)
  }

  get controls() { return this.formCadastrarColaborador.controls };

  get controlsDescontos() {
    return this.controls['descontos'] as FormArray; };

  getControl(formArray: string, control: string, i: number): FormControl {
    return this.formCadastrarColaborador.get([formArray, i, control]) as FormControl;
  }

  get controlsCompetencias() {return this.controls['competencias'] as FormArray; };

  cadastrar() {
    console.log(this.formCadastrarColaborador)
  }

  backToPainel() {
    this.router.navigate([`../painelAdm`])
  }

  
  getFormInjured() {
    return this.formBuilder.group({
      tipoDesconto: [''],
      valorDesconto: [null],
    });
  }

  addDesconto() {
    const descontosArray = this.getFormInjured();
    this.controlsDescontos.push(descontosArray);
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


  getCompetencias() {
    return this.formBuilder.group({
      competencia: ['']
    });
  }

  addCompetencia() {
    const competenciasArray = this.getCompetencias();
    this.controlsCompetencias.push(competenciasArray);
  }  

  removeCompetencia(index: number) {
    const beneficiosArray = this.formCadastrarColaborador.get('competencias') as FormArray;
    beneficiosArray.removeAt(index);
  }
}
