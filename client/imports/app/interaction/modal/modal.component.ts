import { Component, Input, OnInit, OnChanges, Output, EventEmitter  } from '@angular/core';
import template from './modal.component.html';
import style from './modal.component.css';
@Component({
        selector: 'modal',
        template,
        style
})
export class ModalComponent implements OnChanges {


        @Input() selectedFold;
        text: string = 'none';
        foldName: string;
        
}