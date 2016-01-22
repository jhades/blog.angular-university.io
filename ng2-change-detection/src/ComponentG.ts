
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";

@Component({
    selector: 'component-g',
    template: `<div class="component-g">
                    <div class="counter">G: {{counter}}</div>
               </div>`
})
export class ComponentG extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('ComponentG');
    }

}