
import {Component,Input} from "angular2/core";

@Component({
    selector: 'todo-list',
    template: `<ul>
                    <li *ngFor="#todo of todos;">
                        <span>{{todo.description}}</span>
                    </li>
               </ul>`
})
export class TodoList {

    @Input()
    todos: Array<any>;

}