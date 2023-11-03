import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holerite',
  templateUrl: './holerite.component.html',
  styleUrls: ['./holerite.component.css']
})
export class HoleriteComponent {

  constructor(
    private router: Router,
    
  ) {}
  
  download() {
  }

  backToPainel() {
    this.router.navigate([`../home`])
  }
  
}
