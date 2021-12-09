import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentComponent} from "./appointment/appointment.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {path: '', component: AppointmentComponent},
  {path: 'book', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
