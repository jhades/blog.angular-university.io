
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component} from "angular2/core";

@Component({
    selector: 'component-a',
    template: `<div class="component-a"></div>`
})
export class ComponentA extends ChangeDetectionLoggingComponent{

    constructor() {
        super('ComponentA');
    }

}