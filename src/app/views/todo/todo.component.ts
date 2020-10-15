import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Array<ToDoItem>=[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodoList();
  }

// private loadTodoList(): void{
//   this.todoService.getTodoList().then(todoList => this.todoList = todoList);

// }


private loadTodoList(): void {
  this.todoService.getTodoList().then(todoList => {
    this.todoList = todoList;
    console.log(this.todoList);
  });
}
}