import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "./login-user.model";
import {environment} from "../../../environments/environment";
import {Observable, ObservableInput, tap} from "rxjs";
import {TokenInfo} from "./token-info";
import {AccountDto} from "./accountDto";
;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string | undefined;
  constructor(private _http: HttpClient) { }

  create(userDto: AccountDto): Observable<AccountDto>{
    const acctype = 'Customer';
    userDto.type = acctype;
    return this._http
      .post<AccountDto>( environment.api + '/api/Account/CreateAccount', userDto)
  }
  employ(userDto: AccountDto): Observable<AccountDto>{
    const acctype = 'Employee';
    userDto.type = acctype;
    return this._http
      .post<AccountDto>( environment.api + '/api/Account/CreateAccount', userDto)
  }

  login(loginInfo: LoginUser): Observable<TokenInfo> {
    return this._http
      .post<TokenInfo>(environment.api + '/api/Auth/Login', loginInfo)
      .pipe(
        tap(token => {
          if (token && token.jwt){
            localStorage.setItem('jwtToken', token.jwt);
            let accountId = new Number(token.accountId)
            localStorage.setItem('accountId', accountId.toString(10));
          }
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getTokenAccId(): string | null {
    return localStorage.getItem('accountId');
  }

  createAppointment() {

  }
}
