/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

import {ReferenceData} from 'services/ReferenceData';


@Component({
  selector: "color-me",
  properties: ['color: sampleColor']
})
@View({
  template: `<div class='color-me' >
					<h5>Type red, green, yellow, etc. in the input field bellow</h5>
					<input type="text" #input (keyup) [value]="color">
					<div class='color-panel' [style.background]="input.value"></div>
			   </div>`
})
export class ColorMe {
  color: string;

}

@Component({
  selector: "scroll-me"
})
@View({
  template: `<div class='scroll-me' >

					<button id='scroll-up' class='btn btn-primary scroll-btn'>Up</button>

					<div class='selection' [scroll-top]="scroll">
						<div *ng-for="#country of countries;">
							{{country.description}}
						</div>
					</div>

					<button class='btn btn-primary scroll-btn' (click)="onClick()">Down</button>

			   </div>`,
  directives: [NgFor]

})
export class ScrollMe {
  countries: Array<Object> = new ReferenceData().COUNTRIES;
  scroll:number = 0;

  constructor() {
    document.getElementById('scroll-up').addEventListener('click', () => this.scroll -= 30 );
  }

  onClick() {
    this.scroll += 30;
  }
}

@Component({
  selector: 'app',
  viewInjector: [ReferenceData]
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [ColorMe, ScrollMe]
})
class App {}


bootstrap(App);
