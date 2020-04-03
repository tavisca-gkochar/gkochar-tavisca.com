import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

// Declaration
import { CounterActions } from '../store/actions/counter.action';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count: number; // <- New
  subscription: Subscription;
  constructor(private ngRedux: NgRedux<IAppState>, // <- New
    private actions: CounterActions) {
    this.subscription = ngRedux.select<number>('count')
      .subscribe(newCount => this.count = newCount);
  }

  ngOnInit(): void {
  }

  increment() {
    this.ngRedux.dispatch(this.actions.inrement())
  } // <- New
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement())
  } // <- New

}
