import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private storageKey = 'tasks';

  createTask(task: string): void {
    const tasks = this.getTasks();
    tasks.push({ description: task });
    this.saveTasks(tasks);
  }

  getTasks(): { description: string }[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  deleteTask(index: number): void {
    const tasks = this.getTasks();
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  }

  private saveTasks(tasks: { description: string }[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
