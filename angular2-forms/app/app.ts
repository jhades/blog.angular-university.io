/// <reference path="typings/_custom.d.ts" />
import {Component, View, bootstrap, Inject} from 'angular2/angular2';
import {formDirectives, ControlGroup, Validators, formInjectables, FormBuilder} from 'angular2/forms';
import {} from "angular2/di";

@Component({
  selector: 'app'
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [formDirectives]
})
class App {

    tfm: Object = {};

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            "firstName":["", Validators.required],
            "lastName":["", Validators.required],
            "password":["", Validators.required],
            "birthDate":["", Validators.required],
            "weight":["", Validators.required]
        });

        this.form.valueChanges.toRx().map((value) =>value).subscribe((value) => {
            console.log(value);
        });
    }

    onSubmitTemplateBased() {
        console.log("template-based form submitted");
        console.log(this.tfm);
    }


    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }
}


bootstrap(App, [formInjectables]);
