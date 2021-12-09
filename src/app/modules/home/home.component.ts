import { Component, OnInit } from '@angular/core';
import { PATHS } from '@core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes = PATHS;

  constructor() { }

  ngOnInit(): void {
  }

}
