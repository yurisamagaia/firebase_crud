import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  //{ path: '',  redirectTo: '/pages', pathMatch: 'full' },
  { path: '', component: PagesComponent, canActivate: [AuthGuard] },
  //{ path: 'pages', component: PagesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
