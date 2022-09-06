import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // (ngSubmit) -> no need to implement event.preventDefault() as in ReactJs
  onSubmit() {
    if (!this.text) {
      alert('Task name is required!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // TODO: emit event with new task
    this.onAddTask.emit(newTask);

    // clear form later on
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
