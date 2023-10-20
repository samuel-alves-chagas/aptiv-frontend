import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { HoleriteComponent } from './holerite/holerite.component';
import { InformeRendimentosComponent } from './informe-rendimentos/informe-rendimentos.component';
import { AgendamentoFeriasComponent } from './agendamento-ferias/agendamento-ferias.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { PainelAdmComponent } from './painel-adm/painel-adm.component';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { RemoverColaboradorComponent } from './remover-colaborador/remover-colaborador.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HoleriteComponent,
    InformeRendimentosComponent,
    AgendamentoFeriasComponent,
    BeneficiosComponent,
    PainelAdmComponent,
    CadastrarColaboradorComponent,
    RemoverColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
