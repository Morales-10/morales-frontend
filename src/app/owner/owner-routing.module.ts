import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerpageComponent} from "./ownerpage/ownerpage.component";

const routes: Routes = [
  {path: '', component: OwnerpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
