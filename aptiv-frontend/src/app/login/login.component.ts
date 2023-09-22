import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  public formLogin: FormGroup

  constructor(
    private formBuilder: FormBuilder
    
  ) {
    this.formLogin = this.formBuilder.group({
      register: [null],
      password: [null]
    })
  }

  ngOnInit() {
  }

  entrar() {
    console.log(this.formLogin)
  }
}
