import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartpageComponent} from "./startpage/startpage.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path: 'home', component:StartpageComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
