/// <reference path="typings/_custom.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {formDirectives} from 'angular2/forms';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';



@Component({
  selector: 'app'
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [formDirectives]
})
class App {}


bootstrap(App, [routerInjectables]);
