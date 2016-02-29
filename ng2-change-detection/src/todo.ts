
import {Owner} from "./owner";
export class Todo {

    constructor(public id: number, public description: string, public completed: boolean, public owner: Owner) {

    }

}