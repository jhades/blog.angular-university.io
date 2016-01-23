import {Todo} from "../Todo";

export interface AppState {
    todos: Todo[];
    visibilityFilter: string;
}