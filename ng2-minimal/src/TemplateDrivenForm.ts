
import {Component} from 'angular2/core';

@Component({
    selector: "template-driven-form",
    template: `<section class="sample-app-content">

				    <h1>Template-based Form Example:</h1>

				    <form #f="ngForm" (ngSubmit)="onSubmitTemplateBased()">
				        <p>
				            <label>First Name:</label>
				            <input type="text" [(ngModel)]="vm.firstName" required>
				        </p>
				        <p>
				            <label>Password:</label>
				            <input type="password" [(ngModel)]="vm.password" required>
				        </p>
				        <p>
				            <button type="submit" [disabled]="!f.valid">Submit</button>
				        </p>
				    </form>

				</section>`
})
export class TemplateDrivenForm {

    vm: Object = {};

    onSubmitTemplateBased() {
        alert("Template Driven Form submitted: vm = " + JSON.stringify(this.vm));
        console.log(this.vm);
    }

}