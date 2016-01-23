import 'angular2/bundles/angular2-polyfills';
import {bootstrap} from "angular2/platform/browser";
import {Component, provide, Inject, enableProdMode} from "angular2/core";
import {Footer} from "./components/footer";
import {AddTodo} from "./components/add-todo";
import {TodoList} from "./components/todo-list";
import {Subject} from "rxjs/Subject";
import {initState, dispatcher, state} from "./di";
import {Action} from "./flux/actions";
import {appStateFactory} from "./flux/stateFactory";



const stateAndDispatcher = [
    provide(initState, {useValue: {todos: [], visibilityFilter: 'SHOW_ALL'}}),
    provide(dispatcher, {useValue: new Subject<Action>(null)}),
    provide(state, {useFactory: appStateFactory, deps: [new Inject(initState), new Inject(dispatcher)]})
];

@Component({
    selector: 'app',
    template: `
    <add-todo></add-todo>
    <todo-list></todo-list>
    <footer></footer>
  `,
    directives: [AddTodo, TodoList, Footer],
    providers: stateAndDispatcher
})
class TodoApp {
}

enableProdMode(); // due to https://github.com/angular/angular/pull/5996
bootstrap(TodoApp)
    .catch(err => console.error(err));