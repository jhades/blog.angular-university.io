///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'angular2/bundles/angular2-polyfills';
import {Component, OnChanges, DoCheck, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {todos as initialData} from './test_data';
import {TodoList} from "./todo_list";
import {Todo} from "./todo";

@Component({
    selector: 'app',
    directives: [TodoList],
    template: `<div>
                    <todo-list [todos]="todos"></todo-list>
               </div>`
})
export class App {

    todos:Array<Todo> = initialData;

    constructor() {

    }

    toggleFirst() {
        this.todos[0].owner.firstname = "Changed!!";
    }

}

//enableProdMode();
bootstrap(App);
