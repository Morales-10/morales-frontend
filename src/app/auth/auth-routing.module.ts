import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateComponent} from "./create/create.component";
import {CreateEmployeeAccountComponent} from "./create-employee-account/create-employee-account.component";
import {StartpageComponent} from "../home/startpage/startpage.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create', component:CreateComponent},
  {path: 'employ', component: CreateEmployeeAccountComponent},
  {path: 'home', component: StartpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
