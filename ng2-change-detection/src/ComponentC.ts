
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";
import {ComponentG} from "./ComponentG";
import {ComponentF} from "./ComponentF";

@Component({
    selector: 'component-c',
    directives: [ComponentF, ComponentG],
    template: `<div class="component-c">
                    <component-f [counter]="counter"></component-f>
                    <component-g [counter]="counter"></component-g>
                    <div class="counter">C: {{counter}}</div>
               </div>`
})
export class ComponentC extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor() {
        super('ComponentC');
    }

}