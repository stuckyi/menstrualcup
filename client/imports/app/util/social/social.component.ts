import {
        Component, OnInit, Input, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import template from './social.component.html';

@Component ({
    selector: 'util-social',
    template
})
export class SocialComponent {


    socialShare(sns: string) {

        let openUrl:string;


        switch (sns) {
            case 'facebook':
                openUrl = "https://www.facebook.com/sharer/sharer.php?u=";
                break;
            case 'twitter':
                openUrl = "https://twitter.com/intent/tweet?text=helloMenstrualcup?";
                break;
            default:
                openUrl = 'none';
                break;
        }
        //check each sns share url.
        (openUrl === 'none')
            ? location.reload()
            : window.open(openUrl);
    }

}