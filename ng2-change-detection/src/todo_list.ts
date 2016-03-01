
import {Component,Input, ChangeDetectionStrategy, Output, EventEmitter, AfterViewChecked} from "angular2/core";
import {TodoItem} from "./todo_item";
import {Todo} from "./todo";

@Component({
    selector: 'todo-list',
    // uncomment to switch to on-push mode
    //changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [TodoItem],
    template: `<ul>
                    <li *ngFor="#todo of todos;">
                        <todo-item [todo]="todo" (toggle)="onToggle($event)"></todo-item>
                    </li>
               </ul>
               <button (click)="blowup()">Trigger Change Detection Loop</button>`
})
export class TodoList implements AfterViewChecked {

    @Input()
    todos: Array<Todo>;

    @Input()
    callback: Function;

    @Output()
    addTodo = new EventEmitter<Object>();

    clicked = false;

    onToggle(todo) {
        console.log("toggling todo..");
        todo.completed = !todo.completed;

    }

    blowup() {
        console.log("Trying to blow up change detection...");
        this.clicked = true;
        this.addTodo.emit(null);
    }

    ngAfterViewChecked() {
        if (this.callback && this.clicked) {
            console.log("changing status ...");
            this.callback(Math.random());
        }

    }

}