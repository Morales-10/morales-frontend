import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "./login-user.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(loginInfo: LoginUser): Observable<string> {
    return this._http
      .post<string>(environment.api + 'auth', loginInfo);
  }

}
