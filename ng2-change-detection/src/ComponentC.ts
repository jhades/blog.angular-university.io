
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";

@Component({
    selector: 'component-c',
    template: `<div class="component-c">
                    <div class="counter">C: {{counter}}</div>
               </div>`
})
export class ComponentC extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('ComponentC');
    }

}