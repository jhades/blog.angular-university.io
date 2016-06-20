import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {ModelDrivenForm} from './model-driven-form';
import {TemplateDrivenForm} from './template-driven-form';


@Component({
    selector: 'app',
    directives: [ModelDrivenForm, TemplateDrivenForm],
    template: `

		    <template-driven-form></template-driven-form>

    		<model-driven-form></model-driven-form>

`
})
export class App {

    
    
}

bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()
]);