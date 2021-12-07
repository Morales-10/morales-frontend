import { Component, OnInit } from '@angular/core';
import {AccountDto} from "../shared/accountDto";
import {AuthService} from "../shared/auth.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-Morales-BookingSystem-create-employee-account',
  templateUrl: './create-employee-account.component.html',
  styleUrls: ['./create-employee-account.component.scss']
})
export class CreateEmployeeAccountComponent implements OnInit {

  createForm = this.fb.group( {
    name: [''],
    phoneNumber: [''],
    email: [''],
    password:[''],
    chosenSex:[''],
    type:['']
  })

  sexes: string[] = ['Mand','Kvinde','Andet'];


  constructor(private _auth: AuthService,
              private fb: FormBuilder,
              private router : Router) { }

  ngOnInit(): void {

  }

  goBack(): void {
    this.router.navigateByUrl('/owner')
  }

  changeSex() {

  }

  Employ() {
    let accountToCreate = this.createForm.value as AccountDto;
    accountToCreate.sex = this.createForm.value.chosenSex;
    this._auth.employ(accountToCreate)
      .subscribe();
    console.log('Account info: ' + accountToCreate);
  }
}
