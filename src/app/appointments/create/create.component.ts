import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../shared/appointment-service";
import {Appointment} from "../shared/appointment-model";

import {map, Observable, Subject} from 'rxjs';
import {addDays, addHours, addMinutes} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {DatePipe} from "@angular/common";
import {AccountListDto} from "../../auth/shared/account-list-dto";
import {TreatmentList} from "../../treatments/shared/treatment-list.model";
import {AppointmentCreationModle} from "../shared/appointment-creation-modle";


@Component({
  selector: 'app-Morales-BookingSystem-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  appointmentForm = new FormGroup({
    employee: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    treatments: new FormControl('', Validators.required)
  });
  events$ : Observable<CalendarEvent<any>[]> | undefined
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  employees$: Observable<AccountListDto> | undefined;
  treatments$: Observable<TreatmentList> | undefined;

  constructor(private _router : Router,
              private _appointmentService : AppointmentService,
              private _route :ActivatedRoute) { }

  ngOnInit(): void {
    this.employees$ = this._appointmentService.getEmployees();
    this.treatments$ = this._appointmentService.getTreatments();
    this.refreshCalendar()
  }

  refreshCalendar() {
    this.events$ = this._appointmentService.getEvents()
      .pipe(
        map(appointmentEvents => {
          const eventsArray = appointmentEvents.appointmentEvents;
          const calendarEvents: CalendarEvent<any>[] = [];
          if (eventsArray){
            eventsArray.forEach(event => {
              calendarEvents.push({
                title: event.subjectName,
                color: {
                  primary: '#ad2121',
                  secondary: '#FAE3E3',
                },
                start: new Date(event.startInMillis),
                end: addMinutes(new Date(event.startInMillis),event.durationInMinuts)
              })
            })
          }
          return calendarEvents;
        })
      );
  }

  bookTime() {
    const accountId = localStorage.getItem('accountId')
    const formValues = this.appointmentForm.value;
    if(accountId) {
      const newAppointment: AppointmentCreationModle = {
        customerId: +accountId,
        employeeId: +formValues.employee,
        date: formValues.date + ' ' + formValues.time,
        treatmentsList: formValues.treatments,
      }
      this._appointmentService.create(newAppointment).subscribe(() => {this.refreshCalendar()});
    }
  }

  tilbage() {
    this._router.navigateByUrl('/customer')
  }
}
