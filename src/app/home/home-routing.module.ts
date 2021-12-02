import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {EmployeeComponent} from "./employee/employee.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'customer', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
