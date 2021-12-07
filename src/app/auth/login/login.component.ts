import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginUser} from "../shared/login-user.model";


@Component({
  selector: 'app-Morales-BookingSystem-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username:[''],
    password:['']
  });

  constructor(private _auth:AuthService,
              private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  get username(){return this.loginForm.get('username');}
  get password(){return this.loginForm.get('password');}

/*
push now
 */

  login() {
    let loginInfo = this.loginForm.value as LoginUser;
    this._auth.login(loginInfo)
      .subscribe(token => {
        console.log('token', token);
        if (token.permissions = ['admin','employee', 'customer']){

        }
      });
    console.log('loginInfo', loginInfo);
  }
}
