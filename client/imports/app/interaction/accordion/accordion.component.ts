import { Component,OnInit,Input,trigger,state,style,transition,animate } from '@angular/core';
import template from './accordion.component.html';

@Component({
        selector: 'inter-accordion',
        template
})
export class AccordionComponent implements OnInit {
        selectedIndex: string;
        
        indexState = {
                intro: true,
                principle: false
        };


        





        ngOnInit(): void{
                this.selectedIndex = 'intro';
        }        
        

        onIndex(indexName: string) {
                
                switch (indexName) {
                        case 'intro':
                                this.indexState.intro = (!this.indexState.intro) ? true : false;
                                break;
                        case 'principle':
                                this.indexState.principle = (!this.indexState.principle) ? true : false;
                                break;
                        default:
                                console.log('no on index!');
                                break;
                }

                // this.selectedIndex = indexName;
        }
        
}