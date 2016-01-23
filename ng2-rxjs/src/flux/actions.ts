
export class AddTodoAction {

    constructor(public todoId:number, public text:string) {

    }
}

export class ToggleTodoAction {

    constructor(public id:number) {

    }
}

export class SetVisibilityFilter {

    constructor(public filter:string) {

    }
}

export type Action = AddTodoAction|ToggleTodoAction|SetVisibilityFilter;
