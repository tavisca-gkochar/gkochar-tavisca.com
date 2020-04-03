import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
    selector: 'app-countdown-parent-vc',
    template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div #abc class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,

    styles: [
        `
    .seconds {
        background-color: black;
        color: red;
        font-size: 3em;
        margin: 0.3em 0;
        width: 2.5em;
        height: 1em;
        padding-top: 10px;
      }
            
    
    `]
})


export class CountdownViewChildParentComponent implements AfterViewInit {

    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;

    seconds() { return 0; }

    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {
        this.timerComponent.start();
    }
    stop() { this.timerComponent.stop(); }
}
