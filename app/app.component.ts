import {
	Component,
	View
} from 'angular2/core';

@Component({
    selector: 'todo',
})

@View({
    template:  `
    <div class="col-md-6 col-md-offset-3 well" >
        <input class="form-control" placeholder= "Todo" #todotext><br>
        <button class="btn btn-block btn-success"(click)="addTodo(todotext)">Add Todo</button >
        <ul>
            <li *ngFor="#todo of todos" >
                {{ todo }}
            </li>
        </ul>
    </div>
    `,
})

export class Todo
{
    todos: Array<string>;
 
    constructor()
    {
        this.todos = ["First Todo", "Second Todo"];
    }
 
    addTodo( todo )
    {
        this.todos.push( todo.value );
        todo.value = '';
    }
}
 
