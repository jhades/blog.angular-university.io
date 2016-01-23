
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";

@Component({
    selector: 'component-d',
    template: `<div class="component-d">
                    <div class="counter">D: {{counter}}</div>
               </div>`
})
export class ComponentD extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('        ComponentD');
    }

    ngAfterContentChecked() {
        console.log(`${this.name} ngAfterContentChecked`);
    }


}