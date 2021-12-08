import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';


@NgModule({
  declarations: [
    AppointmentComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    BookappointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
