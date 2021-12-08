import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {AccountDto} from "../shared/accountDto";

@Component({
  selector: 'app-Morales-BookingSystem-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  createForm = this.fb.group( {
    name: [''],
    phoneNumber: [''],
    email: [''],
    password:[''],
    chosenSex:[''],
    type:['']
  })

  sexes: string[] = ['Mand','Kvinde'];


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


  changeSex() {
    let accountToCreate = this.createForm.value as AccountDto;
  }

  Create() {
    let accountToCreate = this.createForm.value as AccountDto;
    accountToCreate.sex = this.createForm.value.chosenSex;
    this._auth.create(accountToCreate)
      .subscribe();
    console.log('Account info: ' + accountToCreate);
  }
}
