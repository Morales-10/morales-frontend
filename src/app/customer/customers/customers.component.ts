import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TreatmentList} from "../../treatments/shared/treatment-list.model";
import { Subject } from 'rxjs';
import { addDays, addHours } from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

@Component({
  selector: 'app-Morales-BookingSystem-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  appointments$: Observable<TreatmentList> | undefined;

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
  constructor() { }

  ngOnInit(): void {
  }

}
