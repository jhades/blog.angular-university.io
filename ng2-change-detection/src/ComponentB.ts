
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input, DoCheck} from "angular2/core";

@Component({
    selector: 'component-b',
    template: `<div class="component-b">
                    <div class="counter">Component B: {{counter}}</div>
               </div>`
})
export class ComponentB extends ChangeDetectionLoggingComponent implements DoCheck {

    @Input() counter = 0;

    constructor() {
        super('ComponentB');
    }

    ngDoCheck() {
        console.log(`ngDoCheck ${this.name}`);
        debugger;
    }

}