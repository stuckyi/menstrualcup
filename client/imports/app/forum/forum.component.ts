import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Party } from '../../../../both/models/party.model';
import { Parties } from '../../../../both/collections/parties.collection';
import { PartiesFormComponent } from '../parties/parties-form.component';

import template from './forum.component.html';

@Component({
    selector: 'forum',
    template
})
export class ForumComponent implements OnInit {
    parties: Observable<any[]>;



    constructor() {
        //소비하고자할 경우, 소비를 원하는 component에서도 해줘야한다.
        this.parties = Parties.find({}).zone(); 
    }    
    ngOnInit(): void {
        
    }

    removeParty(party: Party) {
        Parties.remove(party._id);
        
    }

}
