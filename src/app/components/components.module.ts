import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SelectCardsComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports:[
    SelectCardsComponent
  ]
})
export class ComponentsModule { }
