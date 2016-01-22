
import {
    OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy
} from "angular2/core";

export class ChangeDetectionLoggingComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor(protected name: string) {
        
    }
    
    ngOnChanges(changes:{}) {
        console.log(`${this.name} ngOnChanges` + JSON.stringify(changes));
    }

    ngOnInit() {
        console.log(`${this.name} ngOnInit`);
    }

    ngAfterContentInit() {
        console.log(`${this.name} ngAfterContentInit`);
    }

    ngAfterContentChecked() {
        console.log(`${this.name} ngAfterContentChecked`);
    }

    ngAfterViewInit() {
        console.log(`${this.name} ngAfterViewInit`);
    }

    ngAfterViewChecked() {
        console.log(`${this.name} ngAfterViewChecked`);
    }

    ngOnDestroy() {
        console.log(`${this.name} ngOnDestroy`);
    }

}