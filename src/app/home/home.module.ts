import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StartpageComponent } from './startpage/startpage.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    StartpageComponent,
    ContactComponent
  ],


  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
