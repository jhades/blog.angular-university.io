import {Observable} from "rxjs/Observable";
import {Action, AddTodoAction, ToggleTodoAction, SetVisibilityFilter} from "../flux/actions";
import {AppState} from "../flux/app-state";
import {Todo} from "../Todo";
import {merge} from "../merge";
import {wrapIntoBehavior} from "./wrapIntoBehavior";
import "rxjs/add/operator/map";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/zip";


function todos(initState:Todo[], actions:Observable<Action>):Observable<Todo[]> {
    return actions.scan((state, action) => {
        if (action instanceof AddTodoAction) {
            const newTodo = {id: action.todoId, text: action.text, completed: false};
            return [...state, newTodo];
        } else {
            return state.map(t => toggleTodo(t, action));
        }
    }, initState);
}

function toggleTodo(todo:Todo, action:Action):Todo {
    if (action instanceof ToggleTodoAction) {
        // merge creates a new object using the properties of the passed in objects
        return (action.id !== todo.id) ? todo : merge(todo, {completed: !todo.completed});

    } else {
        return todo;
    }
}

function filter(initState:string, actions:Observable<Action>):Observable<string> {
    return actions.scan((state, action) => {
        if (action instanceof SetVisibilityFilter) {
            return action.filter;
        } else {
            return state;
        }
    }, initState);
}

function combine(s) {
    return {
        todos: s[0],
        visibilityFilter: s[1]
    };
}


export function appStateFactory(initState:AppState, actionsObs:Observable<Action>):Observable<AppState> {

    const appStateObs:Observable<AppState> =
        todos(initState.todos, actionsObs)
        .zip(filter(initState.visibilityFilter, actionsObs))
        .map(combine);

    return wrapIntoBehavior(initState, appStateObs);
}
