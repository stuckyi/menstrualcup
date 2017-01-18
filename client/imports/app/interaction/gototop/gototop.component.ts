import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';
import template from './gototop.component.html';

@Component({
    selector: 'inter-gototop',
    template,
    animations: [
        trigger('whenScrollDown', [
            state('void', style({ 'opacity': '1' })),
            state('on', style({ 'opacity': '1' })),
            state('off', style({ 'opacity': '0' })),
            transition('* => *', animate('0.5s ease-in'))
        ])
        
    ]
})

export class GotoTopComponent {
    whenScrollDown: string;
  gotoTop() {
    console.log("gotoTop!");
    window.scrollTo(0, 0);
    
  }

  onScroll() {
    let scrollPos = window.scrollY;
    this.whenScrollDown = (scrollPos > 500) ? 'on' : 'off';
  }

}