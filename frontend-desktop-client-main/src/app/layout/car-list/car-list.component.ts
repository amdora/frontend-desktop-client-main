import { Component, Input, Injector, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IgxFilterOptions } from 'igniteui-angular';
import { Car } from '../../car';
import { ManagerService } from '../../car.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  public height: number;
  public searchCar: any = '';
  public all: Car[];

  ngOnInit() {
    this.all = this.manager.getAll();
  }
  constructor(private router: Router, public manager: ManagerService) {
    this.height = screen.height - 150;
  }

  public toggleFavorite(car: any) {
    car.isFavorite = !car.isFavorite;
  }
  public goTo(car: Car) {
    this.manager.setCar(car);
    this.all = this.manager.getAll();
  }
  public getParsed(car: Car): string {
    return '/dashboard/' + car.id.replace(new RegExp('/', 'g'), '-');
  }
  get filterCars() {
    const fo = new IgxFilterOptions();
    fo.key = 'general';
    if (!this.searchCar) {
      return fo;
    }
    fo.inputValue = this.searchCar;
    return fo;
  }

  @Input() cars: Car[];
}
