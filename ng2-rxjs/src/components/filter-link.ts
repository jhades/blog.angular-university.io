import {Component, Input, Inject} from "angular2/core";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {AppState, SetVisibilityFilter, Action} from "./temp";
import {dispatcher, state} from "../di";

@Component({
    selector: 'filter-link',
    template: `<a href="#" (click)="setVisibilityFilter()"
               [style.textDecoration]="textEffect|async"><ng-content></ng-content></a>`
})
export class FilterLink {
    @Input()
    filter:string;

    constructor(@Inject(dispatcher) private dispatcher:Observer<Action>,
                @Inject(state) private state:Observable<AppState>) {
    }

    get textEffect() {
        return this.state.map(s => s.visibilityFilter === this.filter ? 'underline' : 'none');
    }

    setVisibilityFilter() {
        this.dispatcher.next(new SetVisibilityFilter(this.filter));
    }
}