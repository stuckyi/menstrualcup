import {
        Component, OnInit, Input, trigger, state, style, transition, animate, keyframes,
Output, EventEmitter} from '@angular/core';



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
        

        @Output() update = new EventEmitter();

        selectedIndex: string;
        
        indexState = {
                intro: true,
                principle: false,
                usage: false,
                product: false,
                proscons:false
        };


        
        ngOnInit(): void{
                this.selectedIndex = 'intro';
        }        

        //depth2 목록 클릭시 발생하는 이벤트.
        //어떤 항목을 클릭했는지 AppComponent로 전달한다.
        skrollrAnimateTo(clickname: string) {
                // let targetEl = document.getElementsByClassName('text')[0].childNodes;
                let targetEl = document.getElementById('principle-2').scrollTop;
                console.log(targetEl);
                this.update.emit({ clickname });
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