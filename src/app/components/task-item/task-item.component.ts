import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // var
  displayFormattedDate: string = '';

  @Input() task: Task;
  @Input() formattedDateTime: any;
  // OUTPUT event emitter for Task
  // therefore, implement functionality inside the parent component HTML (Task)
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  // OUTPUT event for toggle
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {
    this.displayFormattedDate = moment(this.formattedDateTime).format(
      'MMMM Do YYYY, h:mm a'
    );
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
