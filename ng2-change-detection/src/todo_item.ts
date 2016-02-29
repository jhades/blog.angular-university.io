
import {Component,Input,Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-item',
    template: `<span class="todo noselect" (click)="onToggle()">{{todo.description}} - completed: {{todo.completed}}</span>`
})
export class TodoItem {

    @Input()
    todo:Object;

    @Output()
    toggle = new EventEmitter<Object>();

    onToggle() {
        this.toggle.emit(null);
    }

}