import { Component } from '@angular/core';
import template from './gototop.component.html';

@Component({
    selector: 'inter-gototop',
    template
})

export class GotoTopComponent {
    whenScrollDown: boolean = false;



  gotoTop() {
    
    console.log("gotoTop!");

    window.scrollTo(0, 0);
    console.log(window);
  }

  onScroll() {
    let scrollPos = window.scrollY;
    this.whenScrollDown = (scrollPos > 500) ? true : false;
  }

}