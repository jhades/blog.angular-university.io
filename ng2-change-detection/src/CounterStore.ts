
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CounterStore {

    private counterValue = 0;
    counterObs: Subject<Number> = new Subject();


    increment() {
        this.counterValue += 1;
        this.counterObs.next(this.counterValue);
    }

}