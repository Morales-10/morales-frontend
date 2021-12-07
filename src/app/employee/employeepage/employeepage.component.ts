import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { Subject } from 'rxjs';
import { addDays, addHours } from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

@Component({
  selector: 'app-Morales-BookingSystem-employeepage',
  templateUrl: './employeepage.component.html',
  styleUrls: ['./employeepage.component.scss']
})
export class EmployeepageComponent implements OnInit {

  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
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

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  bookAppointment():void{
    this.router.navigateByUrl('')
  }
  createNewAccount(): void {
    this.router.navigateByUrl('auth/create')

  }

}
