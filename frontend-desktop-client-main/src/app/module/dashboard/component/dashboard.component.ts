import { Component, Input } from '@angular/core';
import { Car } from '../../../car';
import { ManagerService } from '../../../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  height: number;
  displayedColumns: string[] = ['below', 'average', 'clean', 'retail'];

  constructor(public manager: ManagerService) {
    this.height = screen.height - 150;
  }
  ngOnInit() {
    this.manager.start();
  }
}
