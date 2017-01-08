import { Component, OnInit } from '@angular/core';
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

  ngOnInit(){
    this.selectedMenu = '생리컵이란';
  }

  onMenu(menu){
    console.log(menu);
    this.selectedMenu = menu;
  }
  
}
