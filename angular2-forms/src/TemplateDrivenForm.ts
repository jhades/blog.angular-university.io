
import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/forms';

@Component({
    selector: "template-driven-form"
})
@View({
    templateUrl: 'template-driven-form.html',
    directives: [FORM_DIRECTIVES]
})
export class TemplateDrivenForm {

    vm: Object = {};

    onSubmitTemplateBased() {
        alert("Template Driven Form submitted: vm = " + JSON.stringify(this.vm));
        console.log(this.vm);
    }

}