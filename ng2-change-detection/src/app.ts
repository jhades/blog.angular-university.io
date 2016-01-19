import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentA} from "./ComponentA";

@Component({
    selector: 'app',
    template: `<div>
                   <component-a></component-a>
               </div>`,
    directives: [ComponentA]
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}


bootstrap(App);
