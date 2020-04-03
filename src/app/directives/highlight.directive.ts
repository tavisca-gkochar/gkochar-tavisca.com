import { Directive, ElementRef, OnInit, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',

})
export class HighlightDirective implements OnInit {
  @Input() color: string = 'pink';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    console.log(this.elementRef);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.color);

    // this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

  //Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseleave') leave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}