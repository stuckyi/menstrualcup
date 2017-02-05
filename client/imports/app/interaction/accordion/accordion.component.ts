import {
        Component, OnInit, Input, trigger, state, style, transition, animate, keyframes
} from '@angular/core';
        
import { Router } from '@angular/router';
import { Location } from '@angular/common';






import template from './accordion.component.html';

@Component({
        selector: 'inter-accordion',
        template,
        animations: [
                trigger('selectedIndex', [
                        state('void', style({
                                'transform': 'translateY(-300%)',
                                'z-index': '-10'
                        })),
                        transition('intro => *', animate(0)),
                        transition('principle => *', animate(0)),
                        transition('usage => *', animate(0)),
                        transition('product => *', animate(0)),
                        transition('proscons => *', animate(0)),
                        transition('* => *', animate('.3s .01s ease-in'))
                        /*
                        transition('* => *', animate(200, keyframes([
                                style({ 'opacity': '1' }),
                                style({ 'opacity': '.5' }),
                                style({ 'opacity': '.2' }),
                                style({ 'opacity': '0' })
                        ])))
                        */
                ])
        ]
})
export class AccordionComponent implements OnInit {
        
        selectedIndex: string;
        
        indexState = {
                intro: true,
                principle: false,
                usage: false,
                product: false,
                proscons:false
        };

        constructor(
                private router: Router,
                private location: Location
        ) { }



        
        ngOnInit(): void{
                this.selectedIndex = 'intro';
        }        

        //depth2 목록 클릭시 발생하는 이벤트.
        //어떤 항목을 클릭했는지 AppComponent로 전달한다.
        gotoItem(clickname: string) {


                
                console.log(clickname);
                // let targetEl = document.getElementById(clickname);
                // console.log('targetEl', targetEl);
                
                let targetY = document.getElementById(clickname).offsetTop;
                
                window.scrollTo(0, targetY);
                
                
        }

        onIndex(indexName: string) {
                //모든 acoordion menu를 닫는다.
                this.indexState.intro = false;
                this.indexState.principle = false;
                this.indexState.usage = false;
                this.indexState.product = false;
                this.indexState.proscons = false;

                //현재 선택한 acoordion만 열어준다.
                switch (indexName) {
                        case 'intro':
                                this.indexState.intro = (!this.indexState.intro) ? true : false;
                                break;
                        case 'principle':
                                this.indexState.principle = (!this.indexState.principle) ? true : false;
                                break;
                        case 'usage':
                                this.indexState.usage = (!this.indexState.usage) ? true : false;
                                break;
                        case 'product':
                                this.indexState.product = (!this.indexState.product) ? true : false;
                                break;
                        case 'proscons':
                                this.indexState.proscons = (!this.indexState.proscons) ? true : false;
                                break;
                        default:
                                console.log('no on index!');
                                break;
                }
                
                //현재 선택한 index를 변경해준다 (for animation key)
                this.selectedIndex = indexName;

                this.gotoTop();
        }
        
        //페이지의 최상단으로 이동한다.
        gotoTop() {
                window.scrollTo(0, 0);
        }
        
}