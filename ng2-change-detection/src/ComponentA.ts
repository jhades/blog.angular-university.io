
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";
import {ComponentB} from "./ComponentB";
import {ComponentC} from "./ComponentC";

@Component({
    selector: 'component-a',
    directives: [ComponentB, ComponentC],
    template: `<div class="component-a">
                    <component-b [counter]="counter"></component-b>
                    <component-c [counter]="counter"></component-c>
                    <div class="counter">A: {{counter}}</div>
               </div>`
})
export class ComponentA extends ChangeDetectionLoggingComponent {

    @Input() counter = 0;

    constructor() {
        super('ComponentA');
    }

}