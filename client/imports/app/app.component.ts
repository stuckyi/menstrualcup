import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScrollComponent } from './interaction/scroll/scroll.component';
import { AccordionComponent } from './interaction/accordion/accordion.component';
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
  s: any;

  

  menuList = [
    { id:0, name: '생리컵이란', name_eng: 'intro', url:'/intro' },
    { id:1, name: '작동원리', name_eng: 'principle', url:'/principle' },
    { id:2, name: '사용법', name_eng: 'usage', url:'/usage' },
    { id:3, name: '제품정보', name_eng: 'product', url:'/product' },
    { id:4, name: '역사', name_eng: 'history', url:'/history' },
    { id:5, name: '장단점', name_eng: 'proscons', url:'/proscons' }
  ];


  

  constructor(private ref: ElementRef) { 
    //set html lang to 'ko'.
    ref.nativeElement.parentNode.parentNode.lang = "ko";
    // skrollr libaray init.
    this.skrollrInit();
  }

  skrollrInit() {
    this.s = skrollr.init();
    //두 번째 매개변수는 옵션.
    skrollr.menu.init(this.s, {
        
        animate: true,  //skrollr는 `animateTo`를 활용하여 새로운 위치로 부드럽게 이동.
        //The easing function to use.
        easing: 'sqrt',
    
        //skrollr.init의 값과 같도록 data-[offset]값을 곱하시오. 
        scale: 2,
    
        //aniamtion의 길이(ms)
        duration: function(currentTop, targetTop) {
            //기본값., the duration is hardcoded at 500ms.
            return 1000;
    
            //그러나 현재스크롤위치(`currentTop`)과 목표스크롤위치(`targetTop`)으로 값을 계산할 수 도 있다.
            //return Math.abs(currentTop - targetTop) * 10;
        },
    
        //만약 handleLink 함수를 넘기면,  `data-menu-top` 와 `data-menu-offset` 함수를 비활성화(disable)할 것이다.
        //skrollr가 scroll할 곳을 제어할 수 있다. 클릭된 링크를 매개변수로 가져오고 숫자를 리턴해야한다.
        handleLink: function(link) {
            return 400;//Hardcoding 400 doesn't make much sense.
        },
    
        
        // 기본적으로 skrollr-menu 는 href 속성에 hash가 포함된 링크에만 반응한다.   e.g. `href="#foo"`.
        // `complexLinks`를 활성화하면 skrollr-menu also reacts to절대경로나 상대경로에도 반응한다.
        
        //(사용자가 올바른 경로에 있는 경우)다음은 모드 올바르게 작동한다
        //http://example.com/currentPage/#foo
        //http://example.com/currentDir/currentPage.html?foo=bar#foo
        ///?foo=bar#foo

        complexLinks: false,
    
        //이 이벤트는 우리가 새로운 hash로 jump/animatie하기 직전에 트리거된다.
        change: function (newHash, newTopPosition) {
          let testEl = document.getElementById('intro-structure');
          // console.log(testEl.offsetTop);
          console.log('newHash', newHash);
          console.log('newTopPosition', newTopPosition);
            //Do stuff
        },
    
        //URL에 해시링크(e.g. `#foo`) 추가한다.
        updateUrl: false //defaults to `true`.
    });
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
