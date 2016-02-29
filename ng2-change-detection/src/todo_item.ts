
import {Component,Input} from 'angular2/core';

@Component({
    selector: 'todo-item',
    template: `<span class="todo" ngClass="{completed: 'todo.completed'}" dblclick="">{{todo.description}}</span>`
})
export class TodoItem {

    @Input()
    todo:any;

}