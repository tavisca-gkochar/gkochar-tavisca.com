import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {People} from './models/people.model';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
  styles: [`
    h2 { 
      font-weight: bold;
      color: #a18595; 
    }
  
  `],
})
export class StylingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  getColor(country) {
    (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  people: People[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

}