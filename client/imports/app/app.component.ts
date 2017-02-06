
import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScrollDirective } from './interaction/scroll/scroll.directive';
// import { ScrollComponent } from './interaction/scroll/scroll.component';
// import { AccordionComponent } from './interaction/accordion/accordion.component';
import { GotoTopComponent } from './interaction/gototop/gototop.component';
import { SocialComponent } from './util/social/social.component'

import template from './app.component.html';
import styles from '../../../public/sass/main.css';

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent implements OnInit {
  selectedMenu: string;



  constructor(private ref: ElementRef) { 
    ref.nativeElement.parentNode.parentNode.lang = "ko"; //set html lang to 'ko'.
  }


  ngOnInit() {
    console.log('AppComponent ngOnInit');
    this.selectedMenu = '생리컵이란';
  }

  onMenu(menu){
    console.log(menu);
    this.selectedMenu = menu;
    this.gotoTop(); // 페이지 최상단으로 이동 
  }

  

  gotoTop() {
    window.scrollTo(0, 0);
  }



}
