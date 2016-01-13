import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ModelDrivenForm} from './ModelDrivenForm.js';
import {TemplateDrivenForm} from './TemplateDrivenForm.js';
import 'rxjs/Rx' ;

@Component({
    selector: 'app',
    template: `<div>

		    <template-driven-form></template-driven-form>

    		<model-driven-form></model-driven-form>
			
			</div>`,
	directives: [ModelDrivenForm, TemplateDrivenForm]
})
export class Hello {

}

bootstrap(Hello);