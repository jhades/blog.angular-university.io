import {Component} from 'angular2/core';
import {Validators, FormBuilder,Control} from 'angular2/common';

@Component({
    selector: "model-driven-form",
    template: `<section class="sample-app-content">

                <h1>Model-based Form Example:</h1>

                <form [ngFormModel]="form" (ngSubmit)="onSubmit()">
                    <p>
                        <label>First Name:</label>
                        <input type="text" ngControl="firstName">
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="password" ngControl="password">
                    </p>
                    <p>
                        <button type="submit" [disabled]="!form.valid">Submit</button>
                    </p>
                </form>

            </section>`
})
export class ModelDrivenForm {


    form: ControlGroup;
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
        this.form.valueChanges
            .map((value) => {
                value.firstName = value.firstName.toUpperCase();
                return value;
            })
            .filter((value) => this.form.valid)
            .subscribe((value) => {

            alert("Model Driven Form valid value: vm = " + JSON.stringify(value));
        });

        // observe only one field
        this.form.controls.firstName.valueChanges.subscribe( value => {
                console.log('first name changed = ' + value);
            });

    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form);
    }

}
