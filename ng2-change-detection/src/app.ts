///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'angular2/bundles/angular2-polyfills';
import {Component, OnChanges, DoCheck, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {todos as initialData} from './test_data';
import {TodoList} from "./todo_list";
import {Todo} from "./todo";
import {Owner} from "./owner";

@Component({
    selector: 'app',
    directives: [TodoList],
    template: `<div>
                    <todo-list [todos]="todos"></todo-list>
               </div>
               <button (click)="toggleFirst()">Toggle First Item</button>
               <button (click)="addTodo()">Add Todo to List</button>`
})
export class App {

    todos:Array<Todo> = initialData;

    constructor() {

    }

    toggleFirst() {
        this.todos[0].completed = ! this.todos[0].completed;
    }

    addTodo() {
        let newTodos = this.todos.slice(0);
        newTodos.push( new Todo(1, "TODO 4", false, new Owner("John", "Doe")));
        this.todos = newTodos;
    }

}

//enableProdMode();
bootstrap(App);
