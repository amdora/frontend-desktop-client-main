import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarViewComponent } from './car-view/car-view.component';
import { IgxModule } from './igx.module';
import { MaterialModule } from './material.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { ManagerService } from './car.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {LayoutModule} from './layout/layout.module';

@NgModule({
  schemas: [],
  declarations: [
    AppComponent,
    DashboardComponent,
    CarListComponent,
    CarViewComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    IgxModule,
    NgImageSliderModule,
    AlertModule.forRoot(),
    LayoutModule
    //
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
