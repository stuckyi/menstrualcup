import { Component } from '@angular/core';
import { Router } from '@angular/router';

import template from './sidenav.component.html';

@Component({
    selector: 'ui-sidenav',
    template
})
export class SidenavComponent {
    selectedItem: any;

    constructor(private router: Router){ }
    
    gotoItem(): void {
        this.selectedItem = 'intro-1';
        this.router.navigate(['/intro', this.selectedItem]);
    }
}