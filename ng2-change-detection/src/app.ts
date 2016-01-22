import 'angular2/bundles/angular2-polyfills';
import {Component, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentA} from "./ComponentA";
import {CounterStore} from "./CounterStore";
import {Subscriber} from "rxjs/Subscriber";

@Component({
    selector: 'app',
    template: `<div>
                   <component-a [counter]="counter"></component-a>
                   <div class="counter">App: {{counter}}</div>
                   <button (click)="onClick()">Trigger Change Detection</button>
               </div>`,
    directives: [ComponentA]
})
export class App {

    counter = 0;

    constructor(private counterStore: CounterStore) {
        counterStore.counterObs.subscribe(counter => this.counter += 1);
    }

    onClick() {
        this.counterStore.increment();
        console.log("Change detection triggered...");
    }

}


//enableProdMode();
bootstrap(App, [CounterStore]);
