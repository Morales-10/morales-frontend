import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerpageComponent } from './ownerpage/ownerpage.component';


@NgModule({
  declarations: [
    OwnerpageComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
