import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Appointment} from "./appointment-model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppointmentList} from "./appointment-list.model";
import {AppointmentEventsListModel} from "../../employee/shared/appointment-events-list-model";


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentApi = environment.api + '/api/Appointment';

  constructor(private _http :HttpClient,) { }

  getAppointments(): Observable<AppointmentList> {
    return this._http
      .get<AppointmentList>(this.appointmentApi)
  }

  getAppointment(id:number): Observable<Appointment>{
    return this._http.get<Appointment>(this.appointmentApi + '/' + id)
  }

  create(appointment: Appointment) : Observable<Appointment> {
    return this._http
      .post<Appointment>(this.appointmentApi, appointment);
  }

  update(appointment: Appointment) : Observable<Appointment> {
    return this._http
      .put<Appointment>(this.appointmentApi + '/' + appointment.id, appointment);

  }

  delete(appointment: Appointment) : Observable<Appointment> {
    return this._http
      .delete<Appointment>( this.appointmentApi + '/' + appointment.id);
  }
  getEvents() : Observable<AppointmentEventsListModel>{
    return this._http.get<AppointmentEventsListModel>(this.appointmentApi + '/employee/events/user')
  }
}
