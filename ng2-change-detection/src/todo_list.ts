
import {Component,Input} from "angular2/core";
import {TodoItem} from "./todo_item";
import {Todo} from "./todo";

@Component({
    selector: 'todo-list',
    directives: [TodoItem],
    template: `<ul>
                    <li *ngFor="#todo of todos;">
                        <todo-item [todo]="todo" (toggle)="onToggle($event)"></todo-item>
                    </li>
               </ul>`
})
export class TodoList {

    @Input()
    todos: Array<Todo>;

    onToggle(todo) {
        console.log("toggling todo..");
        todo.completed = !todo.completed;

    }

}