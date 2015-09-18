import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES, ControlGroup, Validators, FormBuilder, Control} from 'angular2/forms';

@Component({
    selector: "model-driven-form"
})
@View({
    templateUrl: 'model-driven-form.html',
    directives: [FORM_DIRECTIVES]
})
export class ModelDrivenForm {

    firstName: Control = new Control("", Validators.required);

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password":["", Validators.required]
        });


        // observe the full form as a whole
        // apply complex cross field validations
        // pre-save the form in the background
        // easy implementation of requirements like undo/redo of valid states
        this.form.valueChanges.toRx()
            .map((value) => {
                value.firstName = value.firstName.toUpperCase();
                return value;
            })
            .filter((value) => this.form.valid)
            .subscribe((value) => {

            alert("Model Driven Form valid value: vm = " + JSON.stringify(value));
        });

        // observe only one field
        this.form.controls.firstName.valueChanges.observer({
            next: (value) => {
                console.log('first name changed = ' + value);
            }
        });

    }

    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }

}
