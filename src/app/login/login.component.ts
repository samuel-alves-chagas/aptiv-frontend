import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  public formLogin: FormGroup
  public errorMessage: String

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    
  ) {
    this.formLogin = this.formBuilder.group({
      registro: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })

    this.errorMessage = '';
  }

  ngOnInit() {

  }

  entrar() {
    const body = this.formLogin.getRawValue();

    this.loginService.login(body).pipe(take(1)).subscribe((res: any) => {

      if(res) {
        const user = {user: res.nome, perfil: res.perfil_de_acesso, id: res._id}
        localStorage.setItem('user', JSON.stringify(user))
        this.router.navigate([`../home`]);
        this.errorMessage = "";
      }
    },(error) => {
      this.errorMessage = 'Registro ou senha inválidos!';
    })
  }
}
