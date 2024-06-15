import { Component } from '@angular/core';

interface Task {
  done: boolean;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  taskList: Task[] = []

  constructor() {
    this.taskList = [
      {done: false, description: "Go to the gym"},
      {done: false, description: "Go to college"},
      {done: true, description: "Go to the hospital"},
    ]
  }

  changeTask(task: Task) {
    task.done = !task.done
  }
}
