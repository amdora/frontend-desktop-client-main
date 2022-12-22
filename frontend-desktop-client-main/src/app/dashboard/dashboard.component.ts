import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ManagerService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
constructor(private manager: ManagerService) {}
  ngOnInit() {
    this.manager.start();
  }
}
