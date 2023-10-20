import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HoleriteComponent } from './holerite/holerite.component'
import { InformeRendimentosComponent } from './informe-rendimentos/informe-rendimentos.component'
import { AgendamentoFeriasComponent } from './agendamento-ferias/agendamento-ferias.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

const routes: Routes = [{
  path: "login",
  component: LoginComponent
}, {
  path: "",
  redirectTo: "login",
  pathMatch: "full"
}, {
  path: "home",
  component: HomeComponent,
}, {
  path: "holerite",
  component: HoleriteComponent
}, {
  path: "informe-rendimentos",
  component: InformeRendimentosComponent
}, {
  path: "agendamento-ferias",
  component: AgendamentoFeriasComponent
}, {
  path: "beneficios",
  component: BeneficiosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
