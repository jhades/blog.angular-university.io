
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input, DoCheck} from "angular2/core";

@Component({
    selector: 'component-a',
    template: `<div class="component-a">
                    <div class="counter">Component A Counter: {{counter}}</div>
               </div>`
})
export class ComponentA extends ChangeDetectionLoggingComponent implements DoCheck {

    @Input() counter = 0;

    constructor() {
        super('ComponentA');
    }

    ngDoCheck() {
        console.log(`ngDoCheck ${this.name}`);
        return true;
    }

}