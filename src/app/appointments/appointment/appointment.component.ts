import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppointmentService} from "../shared/appointment-service";
import {Observable} from "rxjs";
import {AppointmentList} from "../shared/appointment-list.model";

@Component({
  selector: 'app-Morales-BookingSystem-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointments$: Observable<AppointmentList> | undefined

  constructor(private _router : Router,
              private _appointmentService: AppointmentService,
              ) { }

  ngOnInit(): void {
    this.appointments$ = this._appointmentService.getUserAppointments();
  }

  tilbage() {
    this._router.navigateByUrl('/customer')
  }
}
