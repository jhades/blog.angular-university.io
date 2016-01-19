
import {
    OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy
} from "angular2/core";

export class ChangeDetectionLoggingComponent implements OnChanges, OnInit, /*DoCheck, */ AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor(private name: string) {
        
    }
    
    ngOnChanges(changes:{}) {
        console.log(`ngOnChanges ${this.name}` + JSON.stringify(changes));
    }

    ngOnInit() {
        console.log(`ngOnInit ${this.name}`);
    }
/*
    ngDoCheck() {
        console.log(`ngDoCheck ${this.name}`);
    }*/

    ngAfterContentInit() {
        console.log(`ngAfterContentInit ${this.name}`);
    }

    ngAfterContentChecked() {
        console.log(`ngAfterContentChecked ${this.name}`);
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit ${this.name}`);
    }

    ngAfterViewChecked() {
        console.log(`ngAfterViewChecked ${this.name}`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy ${this.name}`);
    }

}