import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { TableComponent } from './components/table/table.component';
import { DarkBodyComponent } from './components/dark-body/dark-body.component';
import { DarkTableComponent } from './components/dark-table/dark-table.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent,
    TableComponent,
    DarkBodyComponent,
    DarkTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
