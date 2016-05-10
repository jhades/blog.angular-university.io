
import {Component, Input, Output, EventEmitter} from "@angular/core";



@Component({
    selector: 'search-box',
    template: `<div>
                   <input #input placeholder="{{label}}" (keydown)="onSearch($event, input.value)" (blur)="onBlur()">  
                   <button (click)="onClear(input)">Clear</button>
                </div>`
})
export class SearchBox {

    @Input()
    label = "";

    @Input()
    search = "";

    @Output("search")
    searchEmitter = new EventEmitter<string>();

    @Output()
    touched = new EventEmitter();


    onSearch($event, value) {
        if ($event.keyCode == 13) {
            console.log('emitting search ' + value);
            this.searchEmitter.emit(value);
            $event.preventDefault();
        }
    }


    onBlur() {
        this.touched.emit(null);
    }

    onClear(input) {
        input.value = "";
        this.searchEmitter.emit("");

    }

}