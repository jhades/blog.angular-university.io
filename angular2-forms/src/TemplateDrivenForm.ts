
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

    tfm: Object = {};

    onSubmitTemplateBased() {
        console.log("template-based form submitted");
        console.log(this.tfm);
    }

}