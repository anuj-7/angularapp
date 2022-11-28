// import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustDir]'
})
export class CustDirDirective {

  constructor(private el: ElementRef, private render: Renderer2) { 
    console.log('Custom directive applied');
    // el.nativeElement.style.backgroundColor = 'gray'
    // el.nativeElement.style.display = 'none'
    render.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
