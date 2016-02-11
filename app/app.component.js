System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Todo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Todo = (function () {
                function Todo() {
                    this.todos = ["First Todo", "Second Todo"];
                }
                Todo.prototype.addTodo = function (todo) {
                    this.todos.push(todo.value);
                    todo.value = '';
                };
                Todo = __decorate([
                    core_1.Component({
                        selector: 'todo',
                    }),
                    core_1.View({
                        template: "\n    <div class=\"col-md-6 col-md-offset-3 well\" >\n        <input class=\"form-control\" placeholder= \"Todo\" #todotext><br>\n        <button class=\"btn btn-block btn-success\"(click)=\"addTodo(todotext)\">Add Todo</button >\n        <ul>\n            <li *ngFor=\"#todo of todos\" >\n                {{ todo }}\n            </li>\n        </ul>\n    </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], Todo);
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=app.component.js.map