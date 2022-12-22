import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../material.module';
import { IgxModule } from '../../igx.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { DashboardComponent } from './component/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    IgxModule,
    NgImageSliderModule
  ]
})
export class DashboardModule { }
