
import {Todo} from "./todo";
import {Owner} from "./owner";
let testData = [
    new Todo(1, "TODO 1", false, new Owner("John", "Doe")),
    new Todo(1, "TODO 2", false, new Owner("John", "Doe")),
    new Todo(1, "TODO 3", true, new Owner("John", "Doe"))
];

export const todos = testData;