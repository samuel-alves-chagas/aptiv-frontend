import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from '../services/colaborador/colaborador.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-remover-colaborador',
  templateUrl: './remover-colaborador.component.html',
  styleUrls: ['./remover-colaborador.component.css']
})
export class RemoverColaboradorComponent implements OnInit {

  public formRemoverColaborador!: FormGroup;

  listUsers: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fb: FormBuilder,
    private colaboradorService: ColaboradorService,
  ) {
    this.formRemoverColaborador = this.formBuilder.group({
      nome: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.formRemoverColaborador = this.fb.group({
      nome: [null]
    });

    this.mountList().subscribe(
      (colaboradores: any[]) => {
        this.listUsers = colaboradores;
      },
      (error) => {
        console.error('Erro ao carregar colaboradores', error);
      }
    );
  }

  mountList(): Observable<any[]> {
    return this.colaboradorService.listarColaboradores().pipe(
      map((res: any) => {
        if (res && Array.isArray(res)) {
          return res.map((colaborador: any) => ({
            id: colaborador._id,
            name: colaborador.nome,
            matricula: colaborador.registro
          }));
        }
        return [];
      })
    ) as Observable<any[]>;
  }

  backToPainel() {
    this.router.navigate([`../painelAdm`]);
  }

  removeColaborador(id: number) {
    this.colaboradorService.deletarColaborador(id).subscribe(
        (data) => {
            this.mountList().subscribe(
                (colaboradores: any[]) => {
                  this.listUsers = colaboradores;
                },
                (error) => {
                  console.error('Erro ao carregar colaboradores', error);
                }
              );
        },
        (error) => {
            console.error('Erro ao excluir colaborador', error);
        }
    );
  }

  search() {
    if (!this.formRemoverColaborador.get('nome')?.value || this.formRemoverColaborador.get('nome')?.value == '') {
      console.debug('aqui');
      this.mountList().subscribe(
        (colaboradores: any[]) => {
          this.listUsers = colaboradores;
        },
        (error) => {
          console.error('Erro ao carregar colaboradores', error);
        }
      );
    } else {
      this.listUsers = this.listUsers.filter(element => {
        console.debug(this.formRemoverColaborador);
        return element.name.toLowerCase().includes(this.formRemoverColaborador.get('nome')?.value.toLowerCase());
      });
    }
  }
}
