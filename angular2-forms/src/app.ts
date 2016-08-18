
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {ModelDrivenForm} from './model-driven-form';
import {TemplateDrivenForm} from './template-driven-form';


@Component({
    selector: 'app',
    directives: [ModelDrivenForm, TemplateDrivenForm],
    template: `

		    <template-driven-form></template-driven-form>

    		<model-driven-form></model-driven-form>

`
})
export class App {

    
    
}

@NgModule({
    declarations: [App],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);