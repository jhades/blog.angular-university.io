import {Observable, Observer} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/zip';


// -- helpers
function merge(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}


// -- state
export interface Todo { id: number; text: string; completed: boolean; }
export interface AppState { todos: Todo[]; visibilityFilter: string; }


// -- actions
export class AddTodoAction       { constructor(public todoId: number, public text: string){} }
export class ToggleTodoAction    { constructor(public id: number){} }
export class SetVisibilityFilter { constructor(public filter: string){} }
export type Action = AddTodoAction|ToggleTodoAction|SetVisibilityFilter;

export function getVisibleTodos(todos: Todo[], filter: string): Todo[] {
    return todos.filter(t => {
        if (filter === "SHOW_ACTIVE") return !t.completed;
        if (filter === "SHOW_COMPLETED") return t.completed;
        return true;
    });
}

// -- statefn
function todos(initState: Todo[], actions: Observable<Action>): Observable<Todo[]> {
    return actions.scan((state, action) => {
        if (action instanceof AddTodoAction) {
            const newTodo = {id: action.todoId, text: action.text, completed: false};
            return [...state, newTodo];
        } else {
            return state.map(t => updateTodo(t, action));
        }
    }, initState);
}

function updateTodo(todo: Todo, action: Action): Todo {
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

export function stateFn(initState: AppState, actions: Observable<Action>): Observable<AppState> {
    const combine = s => ({todos: s[0], visibilityFilter: s[1]});

    const appStateObs: Observable<AppState> =
        todos(initState.todos, actions).
        zip(filter(initState.visibilityFilter, actions)).
        map(combine);
    return wrapIntoBehavior(initState, appStateObs);
}

function wrapIntoBehavior(init, obs) {
    const res = new BehaviorSubject(init);
    obs.subscribe(s => res.next(s));
    return res;
}
