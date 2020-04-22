import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-custom-element',
    template: `
  <h1>Custom Element is loaded from script referred <h1>
  <app-button (action)="handleClick($event)" label="MY Button"></app-button>
  <p>Value from custom element event is : {{count || '-'}} </p>
  `
})
export class LoadCustomElementComponent implements OnInit {

    public count: string;
    constructor() { }

    ngOnInit(): void {
    }

    handleClick(e) {
        console.log(e);
        this.count = e.detail;
    }


}
