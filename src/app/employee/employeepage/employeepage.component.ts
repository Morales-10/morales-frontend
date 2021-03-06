import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {map, Observable, Subject} from 'rxjs';
import {addDays, addHours, addMinutes} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {DatePipe} from "@angular/common";
import {AppointmentEventsListModel} from "../shared/appointment-events-list-model";
import {EmployeeServiceService} from "../shared/employee-service.service";
import {AppointmentEventModel} from "../shared/appointment-event-model";

@Component({
  selector: 'app-Morales-BookingSystem-employeepage',
  templateUrl: './employeepage.component.html',
  styleUrls: ['./employeepage.component.scss']
})
export class EmployeepageComponent implements OnInit {
  events$ : Observable<CalendarEvent<any>[]> | undefined
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();

  constructor(private router: Router, private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.events$ = this.employeeService.getEvents()
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

  bookAppointment():void{
    this.router.navigateByUrl('')
  }
  createNewAccount(): void {
    this.router.navigateByUrl('auth/create')

  }
  logout(): void {
    this.router.navigateByUrl('/auth/login')
  }

  rebookAppointment() {

  }
}
