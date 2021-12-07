import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";
import { CreateComponent } from './create/create.component';
import { CreateEmployeeAccountComponent } from './create-employee-account/create-employee-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    CreateEmployeeAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
