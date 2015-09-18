import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {FORM_DIRECTIVES, ControlGroup, Validators, FORM_BINDINGS, FormBuilder, Control} from 'angular2/forms';
import {ModelDrivenForm} from './ModelDrivenForm';
import {TemplateDrivenForm} from './TemplateDrivenForm';


@Component({
    selector: 'hello'
})
@View({
    templateUrl: 'form-examples.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ModelDrivenForm, TemplateDrivenForm]
})
export class Hello {

}

bootstrap(Hello, [FORM_BINDINGS]);