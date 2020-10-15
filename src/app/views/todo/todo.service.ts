import { ToDoItem } from './../todo-item';
import { TODO_LIST } from './todo.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

getTodoList(): Promise<Array<ToDoItem>> {
  return Promise.resolve(TODO_LIST);
}

}
