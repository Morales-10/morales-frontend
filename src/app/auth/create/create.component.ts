import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LoginUser} from "../shared/login-user.model";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {CreateUser} from "../shared/create-user.model";
import {AccountDto} from "../shared/accountDto";

@Component({
  selector: 'app-Morales-BookingSystem-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  createForm = this.fb.group( {
    name: [''],
    phonenumber: [''],
    email: [''],
    password:[''],
    sex:[''],
    type:['']
  })
  Create: any;
  sexes: string[] = ['','Male','Female','Brain damaged'];


  constructor(private _auth: AuthService,
              private fb: FormBuilder,
              private router : Router) { }

  ngOnInit(): void {

  }

  goBack(): void {
    this.router.navigateByUrl('/auth/login')
  }

  createAccount() {
    let accountToCreate = this.createForm.value as AccountDto;
    this._auth.create(accountToCreate)
      .subscribe();
    console.log('createinfo: ' + accountToCreate);
  }
}
