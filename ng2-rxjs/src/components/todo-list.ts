import {Observer} from "rxjs/Observer";
import {Component, Inject} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {dispatcher, state} from "../di";
import {TodoItem} from "./todo-item";
import {AppState} from "../flux/app-state";
import {Action, ToggleTodoAction} from "../flux/actions";
import {getVisibleTodos} from "./getVisibleTodos";

@Component({
    selector: 'todo-list',
    template: `<todo *ngFor="#t of filtered|async"
                [text]="t.text" [completed]="t.completed"
                (toggle)="emitToggle(t.id)"></todo>`,
    directives: [TodoItem]
})
export class TodoList {
    constructor(@Inject(dispatcher) private dispatcher:Observer<Action>,
                @Inject(state) private state:Observable<AppState>) {
    }

    get filtered() {
        return this.state.map(s => getVisibleTodos(s.todos, s.visibilityFilter));
    }

    emitToggle(id) {
        this.dispatcher.next(new ToggleTodoAction(id));
    }
}