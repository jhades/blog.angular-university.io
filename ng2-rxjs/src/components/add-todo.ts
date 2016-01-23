import {Component, Inject} from "angular2/core";
import {Observer} from "rxjs/Observer";
import {Action, AddTodoAction} from "./temp";
import {dispatcher} from '../di';

var nextId = 0;

@Component({
    selector: 'add-todo',
    template: `<input #text><button (click)="addTodo(text.value)">Add Todo</button>`
})
export class AddTodo {
    constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {}
    addTodo(value) { this.dispatcher.next(new AddTodoAction(nextId++, value)); }
}
