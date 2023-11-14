import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private fb: FormBuilder
  ) {
    this.formRemoverColaborador = this.formBuilder.group({
      nome: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.formRemoverColaborador = this.fb.group({
      nome: [null]
    })
    this.listUsers = this.mountList();
  }

  mountList() {
    return [
      {
        id:1,
        name: 'Laura',
        matricula: 4563
      },
      {
        id: 2,
        name: 'Samuel',
        matricula: 123
  
      },
      {
        id: 3,
        name: 'Daiane',
        matricula: 4529
  
      }
    ]
  }

  backToPainel() {
    this.router.navigate([`../painelAdm`])
  }

  removeColaborador(id: number) {
    console.debug(id)
    this.listUsers = this.listUsers.filter(element => {
      return element.id != id
    })
  }

  search() {
    if(!this.formRemoverColaborador.get('nome')?.value || this.formRemoverColaborador.get('nome')?.value == '') {
      console.debug('aqui')
      this.listUsers = this.mountList();
    } else {
      this.listUsers =  this.listUsers.filter(element => {
        console.debug(this.formRemoverColaborador)
        return element.name.toLowerCase().includes(this.formRemoverColaborador.get('nome')?.value.toLowerCase())
      })
    }
   
  }
}
