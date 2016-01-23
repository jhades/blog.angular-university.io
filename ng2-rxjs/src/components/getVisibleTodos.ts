
import {Todo} from "../Todo";

export function getVisibleTodos(todos: Todo[], filter: string): Todo[] {
    return todos.filter(t => {
        if (filter === "SHOW_ACTIVE") return !t.completed;
        if (filter === "SHOW_COMPLETED") return t.completed;
        return true;
    });
}
