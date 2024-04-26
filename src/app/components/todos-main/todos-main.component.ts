import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { Todo } from '../../core/todo.model';

@Component({
  selector: 'app-todos-main',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoComponent],
  templateUrl: './todos-main.component.html',
  styleUrl: './todos-main.component.css',
})
export class TodosMainComponent {
  todoInput = '';
  todoList: Todo[] = [];

  addTodo() {
    this.todoList.push(
      new Todo(this.todoInput, Math.floor(Math.random() * 10000))
    );
  }

  deleteTodo(id: number){
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
