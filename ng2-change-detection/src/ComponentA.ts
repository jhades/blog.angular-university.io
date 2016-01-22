
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";
import {ComponentB} from "./ComponentB";

@Component({
    selector: 'component-a',
    directives: [ComponentB],
    template: `<div class="component-a">
                    <component-b [counter]="counter"></component-b>
                    <div class="counter">A: {{counter}}</div>
               </div>`
})
export class ComponentA extends ChangeDetectionLoggingComponent {

    @Input() counter = 0;

    constructor() {
        super('ComponentA');
    }

}