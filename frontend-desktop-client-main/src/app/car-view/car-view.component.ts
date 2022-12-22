import { Component, Input } from '@angular/core';
import { Car } from '../car';
import { ManagerService } from '../car.service';

@Component({
  selector: 'car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css'],
})
export class CarViewComponent {
  height: number;
  displayedColumns: string[] = ['below', 'average', 'clean', 'retail'];

  constructor(public manager: ManagerService) {
    this.height = screen.height - 150;
  }
}
