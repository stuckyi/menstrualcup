import { Component, OnInit } from '@angular/core';
import { ScrollDirective } from './../interaction/scroll/scroll.directive';


import template from './usage.component.html';

@Component({
        selector:'app-usage',
        template
})
export class UsageComponent implements OnInit{
        selectedSubNav: string;


        ngOnInit(): void {
                this.selectedSubNav = 'in';
        }

        onClick(name: string) {
                console.log(("name"), name);
                this.selectedSubNav = name;
        }

}