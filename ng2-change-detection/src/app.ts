///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'angular2/bundles/angular2-polyfills';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


@Component({
    selector: 'app',
    template: `<div>

               </div>`
})
export class App {

    counter = 0;

}



bootstrap(App);
