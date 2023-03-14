import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
  children:[
    {path:'body',component:BodyComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
