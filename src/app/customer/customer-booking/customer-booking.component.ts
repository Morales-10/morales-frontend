import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../shared/customer.service";
import {FormBuilder} from "@angular/forms";
import {AccountDto} from "../../auth/shared/accountDto";
import {CBookingModel} from "../shared/cbooking-model";

@Component({
  selector: 'app-Morales-BookingSystem-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.scss']
})
export class CustomerBookingComponent implements OnInit {

  CBookingForm =this.fb.group( {

    date:[''],
    datetime:[''],
    employeeId:[''],
    customerId:[''],
  })

  hairdresser: string [] = ['anna', 'rasmus'];

  constructor(private CBService: CustomerService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  changeHairdresser() {
    let appointmentToBook = this.CBookingForm.value as CBookingModel;

  }
}
