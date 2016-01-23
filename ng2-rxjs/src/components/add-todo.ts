import {Component, Inject} from "angular2/core";
import {Observer} from "rxjs/Observer";
import {dispatcher} from "../di";
import {Action, AddTodoAction} from "../flux/actions";

var nextId = 0;

@Component({
    selector: 'add-todo',
    template: `<input #text><button (click)="addTodo(text.value)">Add Todo</button>`
})
export class AddTodo {
    constructor(@Inject(dispatcher) private dispatcher:Observer<Action>) {
    }

    addTodo(value) {
        this.dispatcher.next(new AddTodoAction(nextId++, value));
    }
}
