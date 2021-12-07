import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TreatmentList} from "../../treatments/shared/treatment-list.model";

@Component({
  selector: 'app-Morales-BookingSystem-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  appointments$: Observable<TreatmentList> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
