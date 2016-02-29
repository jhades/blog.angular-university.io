
import {Component,Input} from "angular2/core";
import {TodoItem} from "./todo_item";

@Component({
    selector: 'todo-list',
    directives: [TodoItem],
    template: `<ul>
                    <li *ngFor="#todo of todos;">
                        <todo-item [todo]="todo"></todo-item>
                    </li>
               </ul>`
})
export class TodoList {

    @Input()
    todos: Array<any>;

}