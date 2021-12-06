import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StartpageComponent } from './startpage/startpage.component';



@NgModule({
  declarations: [
    StartpageComponent
  ],


  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
