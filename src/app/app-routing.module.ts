import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)},
  {path: '',
  loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule)},
  {path: 'owner',
    loadChildren: () => import('./owner/owner.module')
      .then(m => m.OwnerModule)},
  {path: 'employee',
    loadChildren: () => import('./employee/employee.module')
      .then(m => m.EmployeeModule)},
  {path: 'customer',
    loadChildren: () => import('./customer/customer.module')
      .then(m => m.CustomerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
