
import {Component} from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import {FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
    selector: "model-driven-form",
    template: `<section class="sample-app-content">

                <h1>Model-based Form Example:</h1>

                <form [formGroup]="form" (ngSubmit)="onSubmit()" autocomplete="off">
                    <p>
                        <label>First Name:</label>
                        <input type="text" formControlName="firstName">
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="password" formControlName="password">
                    </p>
                    <p>
                        <button type="submit" [disabled]="!form.valid">Submit</button>
                        <button (click)="updateForm()">Update</button>
                        <button (click)="reset()">Cancel</button>
                    </p>
                </form>

            </section>`
})
export class ModelDrivenForm {


    form: FormGroup;
    firstName: FormControl = new FormControl("", Validators.required);

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
                value.firstName = value.firstName ? value.firstName.toUpperCase() : "";
                return value;
            })
            .filter((value) => this.form.valid)
            .subscribe((value) => {

            console.log("Valid form value: " + JSON.stringify(value));
        });

        // observe only one field
        this.form.controls['firstName'].valueChanges.subscribe( value => {
                console.log('first name changed = ' + value);
            });

    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form);
    }

    reset() {
        this.form.reset();
    }

    updateForm() {
        this.form.patchValue({firstName: 'Johny'});
    }

}
