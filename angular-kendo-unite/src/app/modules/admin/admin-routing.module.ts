import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BodyComponent } from './components/body/body.component';
import { TableComponent } from './components/table/table.component';
import { DarkBodyComponent } from './components/dark-body/dark-body.component';
import { DarkTableComponent } from './components/dark-table/dark-table.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
  children:[
    {path:'body',component:BodyComponent},
    {path:'table',component:TableComponent},
    {path:'dark-body',component:DarkBodyComponent},
    {path:'dark-table',component:DarkTableComponent}
 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
