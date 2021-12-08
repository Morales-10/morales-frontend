import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookappointmentRoutingModule } from './bookappointment-routing.module';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddappointmentComponent
  ],
  imports: [
    CommonModule,
    BookappointmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookappointmentModule { }
