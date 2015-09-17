import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {FORM_DIRECTIVES, ControlGroup, Validators, FORM_BINDINGS, FormBuilder, Control} from 'angular2/forms';

@Component({
    selector: 'hello'
})
@View({
    templateUrl: 'form-examples.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Hello {

    firstName: Control = new Control("", Validators.required);

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "lastName":["", Validators.required],
            "password":["", Validators.required],
            "birthDate":["", Validators.required],
            "weight":["", Validators.required]
        });

/*
        // observe the full form as a whole
        this.form.valueChanges.toRx().map((value) =>value).subscribe((value) => {
            // apply complex cross field validations
            // pre-save the form in the background
            // make the form data immutable
            console.log(value);
        });

        // observe only one field
        this.form.controls.firstName.valueChanges.observer({
            next: (value) => {
                console.log('first name changed = ' + value);
            }
        });*/

    }
/*

    onSubmitTemplateBased() {
        console.log("template-based form submitted");
        console.log(this.tfm);
    }


    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }

    onChangeFirstName() {
        this.firstName.updateValue("Hello ");
    }

    onChangeWholeForm() {
        debugger;
        //TODO how to update whole form
        this.form.updateValueAndValidity({
            firstName: 'Hello',
            lastName: 'World'
        }, false);
    }*/


}

bootstrap(Hello, [FORM_BINDINGS]);