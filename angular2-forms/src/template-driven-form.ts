
import {Component} from '@angular/core';

@Component({
    selector: "template-driven-form",
    template: `<section class="sample-app-content">

				    <h1>Template-based Form Example:</h1>

				    <form #f="ngForm" (ngSubmit)="onSubmitTemplateBased()" autocomplete="off">
				        <p>
				            <label>First Name:</label>
				            <input type="text" name="firstName" required ngModel>
				        </p>
				        <p>
				            <label>Password:</label>
				            <input type="password" name="password" required ngModel>
				        </p>
				        <p>
				            <button type="submit" [disabled]="!f.valid">Submit</button>
				        </p>
				    </form>

				</section>`
})
export class TemplateDrivenForm {

    user = {
        firstName: 'Vasco',
        password:  'test'
    };

    onSubmitTemplateBased() {
        alert("Template Driven Form submitted: vm = " + JSON.stringify(this.user));
        console.log(this.user);
    }

}