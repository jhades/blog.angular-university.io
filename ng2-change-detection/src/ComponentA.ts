
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";

@Component({
    selector: 'component-a',
    template: `<div class="component-a">
                    <div class="counter">Component A Counter: {{counter}}</div>
               </div>`
})
export class ComponentA extends ChangeDetectionLoggingComponent{

    @Input() counter = 0;

    constructor() {
        super('ComponentA');
    }

}