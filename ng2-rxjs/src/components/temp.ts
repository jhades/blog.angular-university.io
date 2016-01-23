import {Observable, Observer} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/zip';
import {Action, AddTodoAction, ToggleTodoAction, SetVisibilityFilter} from "../flux/actions";
import {AppState} from "../flux/app-state";
import {Todo} from "../Todo";
import {merge} from "../merge";



function todos(initState: Todo[], actions: Observable<Action>): Observable<Todo[]> {
    return actions.scan((state, action) => {
        if (action instanceof AddTodoAction) {
            const newTodo = {id: action.todoId, text: action.text, completed: false};
            return [...state, newTodo];
        } else {
            return state.map(t => toggleTodo(t, action));
        }
    }, initState);
}

function toggleTodo(todo: Todo, action: Action): Todo {
    if (action instanceof ToggleTodoAction) {
        // merge creates a new object using the properties of the passed in objects
        return (action.id !== todo.id) ? todo : merge(todo, {completed: !todo.completed});

    } else {
        return todo;
    }
}

function filter(initState: string, actions: Observable<Action>): Observable<string> {
    return actions.scan((state, action) => {
        if (action instanceof SetVisibilityFilter) {
            return action.filter;
        } else {
            return state;
        }
    }, initState);
}

function wrapIntoBehavior(init, obs) {
    const res = new BehaviorSubject(init);
    obs.subscribe(s => res.next(s));
    return res;
}

export function stateFactory(initState: AppState, actions: Observable<Action>): Observable<AppState> {
    const combine = s => ({todos: s[0], visibilityFilter: s[1]});

    const appStateObs: Observable<AppState> =
        todos(initState.todos, actions).
        zip(filter(initState.visibilityFilter, actions)).
        map(combine);
    return wrapIntoBehavior(initState, appStateObs);
}
