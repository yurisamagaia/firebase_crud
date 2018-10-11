import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';

import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [UserComponent, PagesComponent, NavComponent]
})
export class PagesModule { }
