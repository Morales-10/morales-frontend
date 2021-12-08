import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppointmentEventsListModel} from "./appointment-events-list-model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private treatmentsApi = environment.api + '/api/Appointment';

  constructor(private _http: HttpClient,) {  }

  getEvents() : Observable<AppointmentEventsListModel>{
    return this._http.get<AppointmentEventsListModel>(this.treatmentsApi + '/employee/events')
  }
}
