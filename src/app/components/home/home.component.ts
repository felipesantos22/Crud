import { Component } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tasks: { description: string }[] = [];
  newTaskDescription: string = '';

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  async loadTasks(): Promise<void> {
    this.tasks = this.taskService.getTasks();
  }

  async addTask(): Promise<void> {
    if (this.newTaskDescription.trim()) {
      this.taskService.createTask(this.newTaskDescription.trim());
      this.loadTasks(); // Atualizar a lista de tarefas após adição
      this.newTaskDescription = ''; // Limpar o input após adicionar a tarefa
    }
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    this.loadTasks(); // Atualizar a lista de tarefas após exclusão
  }
}
