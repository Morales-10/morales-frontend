import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "./login-user.model";
import {environment} from "../../../environments/environment";
import {Observable, tap} from "rxjs";
import {CreateUser} from "./create-user.model";
import {TokenInfo} from "./token-info";
;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string | undefined;

  constructor(private _http: HttpClient) { }

  login(loginInfo: LoginUser): Observable<TokenInfo> {
    return this._http
      .post<TokenInfo>(environment.api + '/api/Auth/Login', loginInfo)
      .pipe(
        tap(token => {
          if (token && token.jwt){
            localStorage.setItem('jwtToken', token.jwt);
          }
        })
      )
  }

  create(createinfo: CreateUser): Observable<string>{
    return this._http
      .post<string>( environment.api + 'auth', createinfo)
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
