import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Output() onEmitEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  emitEvent(): void {
    this.onEmitEvent.emit("Event emitted from demo component to about component");
  }

}
