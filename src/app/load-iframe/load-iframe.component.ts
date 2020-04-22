import { Component, OnInit, ViewEncapsulation, ViewChild, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-iframe',
    template: `
  <h1>Custom Element is loaded from script referred <h1>
  <iframe #iframeElement frameborder="" width="100%" height="100%" src="http://localhost:4300/" id="help_206547"></iframe>

  {{count}}
  `
})
export class LoadIframeComponent implements OnInit {

    @ViewChild('iframeElement') iframeElement;
    public count;
    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        window.addEventListener('message', this.receiveMessage, false);
    }

    receiveMessage(event) {
        alert("got message: " + event.data);
    }

    handleClick(e) {
        console.log(e);
        this.count = e.detail;

    }



}
