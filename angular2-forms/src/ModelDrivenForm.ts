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
            "lastName":["", Validators.required],
            "password":["", Validators.required],
            "birthDate":["", Validators.required],
            "weight":["", Validators.required]
        });


        // observe the full form as a whole
        this.form.valueChanges.toRx().map((value) =>value).subscribe((value) => {
            // apply complex cross field validations
            // pre-save the form in the background
            // easy implementation of requirements like undo/redo of valid states
            console.log(value);
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
