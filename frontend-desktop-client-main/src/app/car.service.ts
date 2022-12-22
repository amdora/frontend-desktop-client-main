import { Injectable } from '@angular/core';

import testCar, { Car } from './car';



@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  public activeCar: Car;
  public cars: { [id: string]: Car } = {};
  public carIds: string[] = []; // ordered in reverse chronological order

  public add(car: Car, start: boolean = false): void {
    car.create_epoch = new Date(car.create_epoch * 1000);
    car.displayImages = [];
    car.unread = true;

    car.images.forEach((image: String, i: Number) => {
      car.displayImages.push({
        image: image,
        thumbImage: image,
        title: `Image ${i}`,
      });
    });
    car.general = '';

    for (const value of Object.values(car)) {
      car.general += ` ${value}`;
    }
    this.cars[car.id] = car;

    if (start) {
      this.carIds.unshift(car.id);
    } else {
      this.carIds.push(car.id);
    }
  }

  public get(id: string): Car {
    return this.cars[id];
  }

  public getAll(): Car[] {
    const cars = [];

    for (let i = 0; i < this.carIds.length; i++) {
      const c = this.cars[this.carIds[i]];
      cars.push(c);
    }
    return cars;
  }

  public setCar(car: Car) {
    if (this.activeCar) {
      this.activeCar.isActive = false;
    }
    car.isActive = true;
    car.unread = false;
    this.activeCar = car;
  }

  public async start() {
    for (let i = 0; i < 30; i ++) {
      this.add(testCar);
    }
    this.setCar(this.cars[this.carIds[0]]);
  }
}