import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import { Subject } from 'rxjs';
import {addHours, addMinutes} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {Router} from "@angular/router";
import {CustomerserviceService} from "../shared/customerservice.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-Morales-BookingSystem-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  events$ : Observable<CalendarEvent<any>[]> | undefined
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  eventsTest: CalendarEvent[] = [
    {
      title: 'Test appointment(frisør navn i title)',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: new Date(2021, 12,8,12,30,0),
      end: new Date(2021, 12,8,13,0,0)
    },{
      title: 'Bookning ved frisør David',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      start: addHours(new Date(), 4),
      end: addHours(new Date(), 5), // an end date is always required for resizable events to work
    },
  ];
  refresh: Subject<any> = new Subject();


  constructor(private router: Router,
              private customerService: CustomerserviceService,) { }

  ngOnInit(): void {
    this.events$ = this.customerService.getCustomerEvents()
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
  logout(): void {
    this.router.navigateByUrl('/auth/login')
  }
}
