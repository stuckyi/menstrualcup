import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollComponent } from './interaction/scroll/scroll.component';
import template from './app.component.html';
import styles from '../../../public/sass/main.css';

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent implements OnInit {
  selectedMenu:string;

  menuList = [
    { id:0, name: '생리컵이란', name_eng: 'intro', url:'/intro' },
    { id:1, name: '작동원리', name_eng: 'principle', url:'/principle' },
    { id:2, name: '사용법', name_eng: 'usage', url:'/usage' },
    { id:3, name: '제품정보', name_eng: 'product', url:'/product' },
    { id:4, name: '역사', name_eng: 'history', url:'/history' },
    { id:5, name: '장단점', name_eng: 'proscons', url:'/proscons' }
  ];

  

  

  constructor(private ref: ElementRef) { }
  
  ngOnInit() {
    this.selectedMenu = '생리컵이란';
  }
  
  onMenu(menu){
    console.log(menu);
    this.selectedMenu = menu;
  }


  gotoTop() {

    
    console.log("gotoTop!");
    let nativeElement = this.ref.nativeElement;
    let bodyElement = nativeElement.parentNode;
    let DOMElement = bodyElement.parentNode;

    
    console.log('ElementRef', this.ref);
    console.log('nativeElement', nativeElement);
    console.log('bodyElement', bodyElement);
    console.log('DOMElement', DOMElement.parentNode);



    // bodyElement.scrollTo(0, 0);
    // window.scrollTo(0, 0);
  }
  
}
