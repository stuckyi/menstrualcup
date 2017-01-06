import { Component } from '@angular/core';
import template from './app.component.html';
import styles from './app.component.css';

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent  {
  
  name = 'Angular';
  isModal: boolean = false;

  changeState(e: event) {
    console.log('AppComponent', e);
  }
}
