import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppointmentEventsListModel} from "../../employee/shared/appointment-events-list-model";

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  private treatmentsApi = environment.api + '/api/Appointment';

  constructor(private _http: HttpClient,) { }

  getCustomerEvents() : Observable<AppointmentEventsListModel> {
    return this._http.get<AppointmentEventsListModel>
    (this.treatmentsApi + '/user/events/' + localStorage.getItem('accountId'))
  }
}
