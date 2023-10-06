import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HoleriteComponent } from './holerite/holerite.component'

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
