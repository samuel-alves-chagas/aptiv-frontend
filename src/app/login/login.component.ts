import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  public formLogin: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    
  ) {
    this.formLogin = this.formBuilder.group({
      registro: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })
  }

  ngOnInit() {

  }

  entrar() {
    const body = this.formLogin.getRawValue();

    this.loginService.login(body).subscribe(res => {
      if(res) {
        this.router.navigate([`../home`])
      }
    })
    
    
  }
}
