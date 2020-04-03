import { Component, OnInit } from '@angular/core';

import { Hero, heroes } from './hero';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  heroes = heroes;
  hero = this.heroes[0];
  username = '';
  condition = true;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { 
    return hero.id; 
  }

  constructor() { }

  ngOnInit(): void {
  }

  projectContentClicked() {
    alert('content clicked');
  }

  onChange() {
    this.showSad =!this.showSad;
  }

}
