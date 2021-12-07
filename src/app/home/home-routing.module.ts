import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartpageComponent} from "./startpage/startpage.component";


const routes: Routes = [
  {path: 'home', component:StartpageComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
