
import {Component,Input,Output, EventEmitter} from 'angular2/core';
import {Todo} from "./todo";

@Component({
    selector: 'todo-item',
    template: `<span class="todo noselect" [ngClass]="{completed: todo.completed}" (click)="onToggle()">{{todo.owner.firstname}} - {{todo.description}} - completed: {{todo.completed}}</span>`
})
export class TodoItem {

    @Input()
    todo:Todo;

    @Output()
    toggle = new EventEmitter<Object>();

    onToggle() {
        this.toggle.emit(this.todo);
    }

}