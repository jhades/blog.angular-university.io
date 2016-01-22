
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";

@Component({
    selector: 'component-b',
    template: `<div class="component-b">
                    <div class="counter">B: {{counter}}</div>
               </div>`
})
export class ComponentB extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('ComponentB');
    }

}