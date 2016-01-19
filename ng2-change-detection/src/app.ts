import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentA} from "./ComponentA";

@Component({
    selector: 'app',
    template: `<div>
                   <component-a [counter]="counter"></component-a>
                   <div class="counter">App Counter: {{counter}}</div>
                   <button (click)="onClick()">Trigger Change Detection</button>
               </div>`,
    directives: [ComponentA]
})
export class App {

    counter = 0;

    onClick() {
        this.counter ++;
        console.log("Change detection triggered...");
    }

}


bootstrap(App);
