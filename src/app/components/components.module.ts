import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    SelectCardsComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgxSpinnerModule,
  ],
  exports:[
    SelectCardsComponent,
    HeaderComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
