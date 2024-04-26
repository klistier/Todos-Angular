import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../core/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo = new Todo('', 0);
  @Output() deleteTodo = new EventEmitter<number>();

  handleDeleteTodo() {
    this.deleteTodo.emit(this.todo.id);
  }
}
