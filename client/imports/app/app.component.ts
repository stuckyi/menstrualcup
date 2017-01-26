import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Parties } from '../../../both/collections/parties.collection';

import { ScrollComponent } from './interaction/scroll/scroll.component';
import { AccordionComponent } from './interaction/accordion/accordion.component';
import { GotoTopComponent } from './interaction/gototop/gototop.component';
import { SocialComponent } from './util/social/social.component'

import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { ForumComponent } from './forum/forum.component';

import template from './app.component.html';
import styles from '../../../public/sass/main.css';

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent implements OnInit {
  selectedMenu: string;
  s: any;

  parties: Observable<any[]>;


  

  menuList = [
    { id:0, name: '생리컵이란', name_eng: 'intro', url:'/intro' },
    { id:1, name: '작동원리', name_eng: 'principle', url:'/principle' },
    { id:2, name: '사용법', name_eng: 'usage', url:'/usage' },
    { id:3, name: '제품정보', name_eng: 'product', url:'/product' },
    { id:4, name: '역사', name_eng: 'history', url:'/history' },
    { id:5, name: '장단점', name_eng: 'proscons', url:'/proscons' }
  ];


  

  constructor(private ref: ElementRef) { 
    //.find 의 반환 값은 Observable 이 될 것이다.
    //.zone : collection의 변경사항을 view와 연결한다.
    this.parties = Parties.find({}).zone(); 
    // console.log(this.parties.source._data);

    ref.nativeElement.parentNode.parentNode.lang = "ko"; //set html lang to 'ko'.
    // this.skrollrInit(); // skrollr libaray init.
  }
/*
  skrollrInit() {
    this.s = skrollr.init();
    //두 번째 매개변수는 옵션.
    skrollr.menu.init(this.s);
  }
  */


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
