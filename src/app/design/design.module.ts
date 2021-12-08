import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
