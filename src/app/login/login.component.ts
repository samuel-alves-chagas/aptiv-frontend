import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    
  ) {
    this.formLogin = this.formBuilder.group({
      register: [null],
      password: [null]
    })
  }

  ngOnInit() {
  }

  entrar() {
    this.router.navigate([`../home`])
    console.log(this.formLogin)
  }
}
