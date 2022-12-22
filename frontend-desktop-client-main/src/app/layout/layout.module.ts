import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CarListComponent } from './car-list/car-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { IgxModule } from '../igx.module';

import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';


import { NgImageSliderModule } from 'ng-image-slider';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    SideBarComponent,
    CarListComponent,
    SideBarNavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    IgxModule,
    NgImageSliderModule,
    AlertModule.forRoot(),
    RouterModule.forChild([]),
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class LayoutModule { }
