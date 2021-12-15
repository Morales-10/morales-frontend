import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Appointment} from "./appointment-model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppointmentList} from "./appointment-list.model";
import {AppointmentEventsListModel} from "../../employee/shared/appointment-events-list-model";
import {AccountListDto} from "../../auth/shared/account-list-dto";
import {TreatmentList} from "../../treatments/shared/treatment-list.model";
import {AppointmentCreationModle} from "./appointment-creation-modle";
import {AppointmentUpdateDto} from "./appointment-update-dto";


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

  create(appointment: AppointmentCreationModle) : Observable<AppointmentCreationModle> {
    return this._http
      .post<AppointmentCreationModle>(this.appointmentApi, appointment);
  }

  update(appointment: AppointmentUpdateDto) : Observable<Appointment> {
    return this._http
      .put<Appointment>(this.appointmentApi + '/' + appointment.appointmentId, appointment);

  }

  getUserAppointments() : Observable<AppointmentList> {
    return this._http
      .get<AppointmentList>(this.appointmentApi + '/user/' + localStorage.getItem('accountId'));
  }

  delete(appointment: number) : Observable<Appointment> {
    return this._http
      .delete<Appointment>( this.appointmentApi + '/' + appointment);
  }

  getEvents() : Observable<AppointmentEventsListModel>{
    return this._http.get<AppointmentEventsListModel>(this.appointmentApi + '/employee/events/user')
  }

  getEmployees(): Observable<AccountListDto>{
    return this._http.get<AccountListDto>(environment.api + '/api/Account/Employee')
  }

  getTreatments() : Observable<TreatmentList>{
    return this._http
      .get<TreatmentList>(environment.api + '/api/Treatment')
  }
}
