import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Treatment} from "./treatment-model";

class treatment {
}

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  private TreatmentUrl = 'api/treatment';


  constructor(
    private http: HttpClient,
  ) {
  }

  getTreatments(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(this.TreatmentUrl)
      .pipe(
        tap(_ => console.log('fetched treatments')),
        catchError(this.handleError<Treatment[]>('getTreatments',[]))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.handleError(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);

    };
  }
}
