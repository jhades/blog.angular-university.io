import {Component} from "angular2/core";
import {FilterLink} from "./filter-link";

@Component({
    selector: 'footer',
    template: `<filter-link filter="SHOW_ALL">All</filter-link>
            <filter-link filter="SHOW_ACTIVE">Active</filter-link>
            <filter-link filter="SHOW_COMPLETED">Completed</filter-link>`,
    directives: [FilterLink]
})
export class Footer {

}