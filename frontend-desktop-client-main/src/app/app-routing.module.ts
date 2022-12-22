import { Injectable, NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { ManagerService } from './car.service';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard/0', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
  },
  {
    path: 'admin', 
    loadChildren: () => import('./module/dashboard/dashboard.module').then(x => x.DashboardModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
