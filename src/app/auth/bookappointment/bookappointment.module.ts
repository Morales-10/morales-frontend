import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookappointmentRoutingModule } from './bookappointment-routing.module';
import { AddappointmentComponent } from './addappointment/addappointment.component';


@NgModule({
  declarations: [
    AddappointmentComponent
  ],
  imports: [
    CommonModule,
    BookappointmentRoutingModule
  ]
})
export class BookappointmentModule { }
