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

    form:any;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            "firstname":[Validators.required]
        });
    }

}


bootstrap(App, [formInjectables]);
