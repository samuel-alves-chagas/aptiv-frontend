import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { map, take } from 'rxjs';
import { UnidadeService } from '../services/unidade/unidade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrls: ['./cadastrar-colaborador.component.css']
})
export class CadastrarColaboradorComponent implements OnInit {
  public formCadastrarColaborador!: FormGroup
  public errorMessage: String
  public perfisDeAcesso = ['Padrão', 'Administrativo'];
  
  listUnidades: any[] = [];
  listBeneficios: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private colaboradorService: ColaboradorService,
    private unidadeService: UnidadeService
  ) {
    this.errorMessage = '';
  }

  ngOnInit() {
    this.mountListUnidades().subscribe(
      (unidades: any[]) => {
        this.listUnidades = unidades;
      },
      (error) => {
        console.error('Erro ao carregar unidades', error);
      }
    );

    this.formCadastrarColaborador = this.formBuilder.group({
      nome: [null, [Validators.required]],
      data_admissao: [null, [Validators.required]],
      id_unidade: [null, [Validators.required]],
      cargo: [null, [Validators.required]],
      departamento: [null, [Validators.required]],
      perfil_de_acesso: [null, [Validators.required]],
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
      salario: [null, [Validators.required]],
      descontos: this.formBuilder.array([this.formBuilder.group({
        tipo: ['', [Validators.required]],
        valor: [null, [Validators.required]],
      })]),
      beneficios: this.formBuilder.group({
        valeAlimentacao: [false],
        valeRefeicao: [false],
        convenioMedico: [false],
        dayOff: [false],
      }),
      competencias: this.formBuilder.array([this.formBuilder.group({
        competencia: ['', [Validators.required]]
      })]),
      registro: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })

    //console.log(this.formCadastrarColaborador)

    //console.debug('ONINIT => ', this.formCadastrarColaborador)
  }

  mountListUnidades(): Observable<any[]> {
    return this.unidadeService.listarUnidades().pipe(
      map((res: any) => {
        if (res && Array.isArray(res)) {
          return res.map((unidade: any) => ({
            id: unidade._id,
            name: unidade.nome
          }));
        }
        return [];
      })
    ) as Observable<any[]>;
  }

  get controls() { return this.formCadastrarColaborador.controls };

  get controlsDescontos() {
    return this.controls['descontos'] as FormArray;
  };

  getControl(formArray: string, control: string, i: number): FormControl {
    return this.formCadastrarColaborador.get([formArray, i, control]) as FormControl;
  }

  get controlsCompetencias() { return this.controls['competencias'] as FormArray; };

  cadastrar() {
    console.log(this.formCadastrarColaborador)

    const received = this.formCadastrarColaborador.getRawValue();

    let beneficios = []
    if(received.beneficios.valeAlimentacao) {
      beneficios.push({nome: 'Vale alimentação'})
    }
    if(received.beneficios.valeRefeicao) {
      beneficios.push({nome: 'Vale refeição'})
    }
    if(received.beneficios.convenioMedico) {
      beneficios.push({nome: 'Convênio médico'})
    }
    if(received.beneficios.dayOff) {
      beneficios.push({nome: 'Day off no aniversário'})
    }

    let perfil = received.perfil_de_acesso;
    perfil = perfil === "Administrativo" ? "admin" : perfil;

    const body = {
      nome: received.nome,
      cargo: received.cargo,
      departamento: received.departamento,
      perfil_de_acesso: perfil,
      data_admissao: received.data_admissao,
      id_unidade: received.id_unidade,
      dados_pessoais: {
        data_nascimento: received.dataDeNascimento, 
        endereco: {
          logradouro: received.enderecoLogradouro,
          bairro: received.enderecoBairro,
          cidade: received.enderecoCidade,
          estado: received.enderecoEstado,
          cep: received.enderecoCep,
          pais: received.enderecoPais
        },
        telefone: received.telefone,
        email: received.email,
        cpf: received.cpf
      },
      ferias: {
        dias_de_saldo: 0,
      },
      remuneracao: {
        salario_base: received.salario,
        descontos: received.descontos,
        beneficios: beneficios
      },
      competencias: received.competencias.map((e:any) => e.competencia),
      registro: received.registro,
      senha: received.senha
    }

    this.colaboradorService.cadastrar(body).pipe(take(1)).subscribe((res: any) => {

      if (res) {
        console.log(res)
        this.router.navigate([`../painelAdm`]);
        this.errorMessage = "";
      }
    }, (error) => {
      this.errorMessage = 'Falha ao cadastrar colaborador';
    })
  }

  backToPainel() {
    this.router.navigate([`../painelAdm`])
  }

  getFormInjured() {
    return this.formBuilder.group({
      tipo: ['', [Validators.required]],
      valor: [null, [Validators.required]],
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

  getBeneficios() {
    return this.formCadastrarColaborador.get('beneficios') as FormGroup;
  }

  getCompetencias() {
    return this.formBuilder.group({
      competencia: ['', [Validators.required]],
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
