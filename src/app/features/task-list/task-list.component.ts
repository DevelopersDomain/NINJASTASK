// task-list.component.ts
import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
  history: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      title: 'Task 1',
      description: 'This is task 1',
      dueDate: new Date('2022-01-01'),
      priority: 'High',
      status: 'Open',
      history: 'No history'
    },
    {
      title: 'Task 2',
      description: 'This is task 2',
      dueDate: new Date('2022-01-15'),
      priority: 'Medium',
      status: 'In Progress',
      history: 'Updated on 2022-01-10'
    },
    {
      title: 'Task 3',
      description: 'This is task 3',
      dueDate: new Date('2022-02-01'),
      priority: 'Low',
      status: 'Closed',
      history: 'Closed on 2022-01-20'
    }
  ];

  sortBy = 'dueDate';

  openTask(task: Task) {
    console.log(`Opening task ${task.title}`);
  }

  deleteTask(task: Task) {
    console.log(`Deleting task ${task.title}`);
    this.tasks = this.tasks.filter(t => t !== task);
  }
}