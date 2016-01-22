
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";

@Component({
    selector: 'component-f',
    template: `<div class="component-f">
                    <div class="counter">F: {{counter}}</div>
               </div>`
})
export class ComponentF extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('        ComponentF');
    }

}