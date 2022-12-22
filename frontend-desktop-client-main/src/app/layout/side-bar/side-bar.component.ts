import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faCar, faSearch, faFolderOpen, faCog,faGreaterThan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  //templateUrl: './side-bar.component.html',
  template: '<h1>{{sss}}</h1>',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public height: number;
  faBars = faBars;
  facar = faCar;
  faSearch = faSearch
  faFolderOpen = faFolderOpen
  faCog = faCog
  faGreaterThan=faGreaterThan
  public sss:string = "Hello"
  
  
  constructor(private router: Router) {
    this.height = screen.height - 352;
  }

  ngOnInit(): void {
    
  }

}
