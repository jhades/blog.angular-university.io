// -- Components
import {Component, Input, Output, EventEmitter} from "angular2/core";
@Component({
    selector: 'todo',
    template: `<div (click)="toggle.next()" [style.textDecoration]="textEffect">
               {{text}}
             </div>`
})
export class Todo {
    @Input() text: string;
    @Input() completed: boolean;
    @Output() toggle = new EventEmitter();

    get textEffect() {
        return this.completed ? 'line-through' : 'none';
    }
}