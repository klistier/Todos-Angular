import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosMainComponent } from './components/todos-main/todos-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todos-Angular';
}
