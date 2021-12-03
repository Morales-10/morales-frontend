import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LoginUser} from "../shared/login-user.model";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-Morales-BookingSystem-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm = this.fb.group( {
    firstname: [''],
    lastname: [''],
    mobilnumber: [''],
    email: [''],
  })
  Create: any;


  constructor(private _auth: AuthService,
              private fb: FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
  }

  create() {
    let createInfo = this.createForm.value as LoginUser;
    this._auth.login(createInfo)
      .subscribe(token => {
        console.log('token', token);
      });
    console.log('createinfo', createInfo);

  }

  goBack(): void {
    this.router.navigateByUrl('/auth/login')
  }
}
