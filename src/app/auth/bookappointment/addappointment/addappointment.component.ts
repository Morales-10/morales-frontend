import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-Morales-BookingSystem-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {

  AddAppointmentGroup = this.fb.group( {
    Customerid: [''],
    Employeeid: [''],
    Date: [''],
    TreatmentsList: [''],
  })

  constructor(private _auth: AuthService,
              private fb: FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
  }

}
