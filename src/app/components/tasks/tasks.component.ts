import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
// import { TASKS } from '../../mock-task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // Task[] -> 'Task' array
  // tasks: Task[] = TASKS;

  // 1. init tasks with an empty array
  tasks: Task[] = [];

  // 2. in order to use the service, you have to add the service as a provider in ths constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // 3. use it
    // this.tasks = this.taskService.getTasks(); // cannot use this.tasks assignment, because getTasks returns an observable (promise)

    // instead subscribe to the observable
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  deleteTask(task: Task) {
    // HTTP delete
    this.taskService.deleteTask(task).subscribe(() => {
      // filtering: removed deleted task from original list
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
      return this.tasks;
    });
  }

  toggleReminder(task: Task) {
    // HTTP put
    // update reminder
    task.reminder = !task.reminder;

    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    // HTTP post
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
