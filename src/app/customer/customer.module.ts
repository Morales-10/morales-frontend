import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CustomersComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
