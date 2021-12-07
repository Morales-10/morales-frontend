import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateComponent} from "./create/create.component";
import {CreateEmployeeAccountComponent} from "./create-employee-account/create-employee-account.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create', component:CreateComponent},
  {path: 'employ', component: CreateEmployeeAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
