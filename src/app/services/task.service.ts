import { Injectable } from '@angular/core';
// Http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import observable from rxjs
import { Observable, of } from 'rxjs';

import { Task } from '../Task';
// import { TASKS } from '../mock-task';

// options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

// inject this service at the application level
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:4000/tasks';

  // in order to use the HTTP service, you have to add the service as a provider in ths constructor
  constructor(private http: HttpClient) {
    // this.http
  }

  // return an array of Tasks
  // getTasks(): Task[] {
  //   return TASKS;
  // }

  // 1) GET: return tasks as an observable (promise)
  getTasks(): Observable<Task[]> {
    // DISCARD
    // const observableTasks = of(TASKS);
    // return observableTasks;
    // DISCARD

    // return GET

    // Observable<Object> not assignable to Observable<Task[]>
    // return this.http.get(this.apiURL)

    return this.http.get<Task[]>(this.apiURL);
  }

  // 2) DELETE: return  observable
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // 3) PUT: return observable
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;

    return this.http.put<Task>(url, task, httpOptions);
  }

  // 4) POST
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
