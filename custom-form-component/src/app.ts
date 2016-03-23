///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {SearchBox} from "./search_box";
import {SearchBoxValueAccessor} from "./search_box_value_accessor";

@Component({
    selector: 'app',
    directives: [SearchBox, SearchBoxValueAccessor],
    template: `<form [ngFormModel]="form">

                    <input ngControl="username" [(ngModel)]="username"  placeholder="Just an Input"> 
                    <search-box [label]='"Search 1"' ngControl="search" [(ngModel)]="search"></search-box>
                    <search-box [label]='"Search 2"' [ngFormControl]="anotherSearch"></search-box>
                    
                    <button (click)="onGo()">Go</button>
        
                </form>
                `
})
export class App {

    form: ControlGroup;

    username:string;
    search:string;

    anotherSearch = new Control("",Validators.required);

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            username: ["", Validators.required],
            search: ["search", Validators.required],
            anotherSearch: this.anotherSearch
        });

    }

    onGo() {
        console.log(this.username + " / " + this.search + " / " + this.anotherSearch.value);
    }

    

}

bootstrap(App, []);