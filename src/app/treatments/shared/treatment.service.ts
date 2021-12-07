import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {TreatmentList} from "./treatment-list.model";
import {Treatment} from "./treatment-model";


@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private treatmentsApi = environment.api + '/api/treatment';

  constructor(private _http: HttpClient,) { }

  getTreatments() : Observable<TreatmentList>{
    return this._http
      .get<TreatmentList>(this.treatmentsApi)
}
  getTreatment(id:number) : Observable<Treatment>{
    return this._http.get<Treatment>(this.treatmentsApi + '/'+ id)
  }

  update(treatment: Treatment) : Observable<Treatment>{
    return this._http
      .put<Treatment>(
        this.treatmentsApi + '/' + treatment.id, treatment);
  }

  create(treatment: Treatment) : Observable<Treatment> {
    return this._http
      .post<Treatment>(this.treatmentsApi, treatment);
  }

  delete(treatment: Treatment) : Observable<Treatment> {
    return this._http
      .delete<Treatment>(this.treatmentsApi + '/' + treatment.id);
  }



}
