import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginUser} from "../shared/login-user.model";
import {Route, Router} from "@angular/router";


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
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  get username(){return this.loginForm.get('username');}
  get password(){return this.loginForm.get('password');}



  login() {
    let permisions : string[]
    let loginInfo = this.loginForm.value as LoginUser;
    this._auth.login(loginInfo)
      .subscribe(token => {
        console.log('token', token);
        permisions = token.permission;
        if(permisions.indexOf('Owner') > -1){
          this.router.navigateByUrl('/owner')
        } else if (permisions.indexOf('Employee') > -1){
          this.router.navigateByUrl('/employee')
        } else if (permisions.indexOf('Customer') > -1){
          this.router.navigateByUrl('/customer')
        }
      });
    console.log('loginInfo', loginInfo);
  }
}
