
import {Component} from '@angular/core';

@Component({
    selector: "template-driven-form",
    template: `<section class="sample-app-content">

				    <h1>Template-based Form Example:</h1>

				    <form #f="ngForm" (ngSubmit)="onSubmitTemplateBased()" autocomplete="off">
				        <p>
				            <label>First Name:</label>
				            <input type="text" [(ngModel)]="user.firstName" name="firstName" required>
				        </p>
				        <p>
				            <label>Password:</label>
				            <input type="password" [(ngModel)]="user.password" name="password" required>
				        </p>
				        <p>
				            <button type="submit" [disabled]="!f.valid">Submit</button>
				        </p>
				    </form>

				</section>`
})
export class TemplateDrivenForm {

    user = {};

    onSubmitTemplateBased() {
        alert("Template Driven Form submitted: vm = " + JSON.stringify(this.user));
        console.log(this.user);
    }

}