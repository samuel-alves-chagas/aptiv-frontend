import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name!: string;
  @Input() role!: string;
  @Input() icon!: string;

  mainClass: string[] = ["header"]
  iconClass: string[] = []
  constructor() {}

  ngOnInit() {
    if (this.role === "admin") {
      this.mainClass.push('admin')
    } else {
      this.mainClass.push('user')
    }

    if(this.icon === "profile"){
      this.iconClass.push('fa-solid')
      this.iconClass.push('fa-circle-user')
      this.iconClass.push('profile')
    } else {
      this.iconClass.push('fa')
      this.iconClass.push('fa-arrow-left')
    }
  }
}
