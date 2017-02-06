import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[scroller]'
})

export class ScrollDirective implements OnInit {
    fixedPointY: number;
    subNav: any;

    
    ngOnInit(): void {
        this.subNav = document.getElementsByClassName("fixed-menu")[0];

        //subNav를 fixed할 기준점 (header+intro height)
        this.fixedPointY = (document.getElementsByClassName('intro')[0].offsetHeight
            + document.getElementsByClassName('header')[0].offsetHeight);
    }


    
    @HostListener('window:scroll') onScrollEvent() {
        let documentBodyScrollTop = document.body.scrollTop; //브라우저의 스크롤top 값

        if (documentBodyScrollTop >= this.fixedPointY) {
            this.subNav.style.position = 'fixed';
            this.subNav.style.top = '0'; 
        } else {
            this.subNav.style.position = 'static';
        }
    }
}