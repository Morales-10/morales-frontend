import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeepageComponent} from "./employeepage/employeepage.component";

const routes: Routes = [
  {path: 'Profile', component: EmployeepageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
