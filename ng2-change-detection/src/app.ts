///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'angular2/bundles/angular2-polyfills';
import {Component, NgZone, OnChanges, DoCheck} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {todos as initialData} from './test_data';
import {TodoList} from "./todo_list";

@Component({
    selector: 'app',
    directives: [TodoList],
    template: `<div>
                    <todo-list [todos]="todos"></todo-list>
               </div>`
})
export class App {

    todos = initialData;

    constructor(ngZone: NgZone) {

        ngZone.run(() => {
            console.log('this code will run inside the Angular zone...');
        });
    }

}

bootstrap(App);
