import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userName: string = ""
  perfil: string = "admin"
  icon = "profile"

  constructor() {

  }

  ngOnInit(): void {
    const user: any = localStorage.getItem('user');
    this.userName = JSON.parse(user).user;
    this.perfil = JSON.parse(user).perfil;
  }
}
