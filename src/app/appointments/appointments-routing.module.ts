import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentComponent} from "./appointment/appointment.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {path: '', component: AppointmentComponent},
  {path: 'book', component: CreateComponent},
  {path: 'Update/:id', component: UpdateComponent},
  {path: 'list', component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
