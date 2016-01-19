import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
               </div>`
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}


bootstrap(App);
