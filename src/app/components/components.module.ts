import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SelectCardsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports:[
    SelectCardsComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
