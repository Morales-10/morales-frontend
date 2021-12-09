import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {CustomerBookingComponent} from "./customer-booking/customer-booking.component";

const routes: Routes = [
  {path:'',component:CustomersComponent},
  {path:'', component:CustomerBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
