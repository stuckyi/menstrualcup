import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import { Parties } from '../../../../both/collections/parties.collection';

import template from './parties-form.component.html';

@Component({
    selector: 'parties-form',
    template
})

@InjectUser('user')   
export class PartiesFormComponent implements OnInit{
    user: Meteor.User;
    addForm: FormGroup;

    constructor(private formBuilder: FormBuilder){}    
    ngOnInit(): void {
        
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            location: ['', Validators.required],
            public: [false]
        });

        console.log("this.addForm.valid", this.addForm.valid);
    }

    addParty(): void{
        if (!Meteor.userId()) {
            alert('party를 추가하려면 로그인하세요.');
            return;
        }
        if(this.addForm.valid) {
            Parties.insert(
                Object.assign(
                    {},
                    this.addForm.value,
                    { owner: Meteor.userId() }
                )
            );
            this.addForm.reset();
        }
    }
    
}