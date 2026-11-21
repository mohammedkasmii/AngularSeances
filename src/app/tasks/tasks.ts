import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { OverduePipe } from '../pipes/overdue-pipe';

@Component({
  selector: 'app-tasks',
  imports: [DatePipe, UpperCasePipe, OverduePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', completed: true, priority: 'high', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', completed: false, priority: 'medium', dueDate: '2026-11-25' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low', dueDate: '2026-12-05' },
  ]);
  count = computed(() => this.tasks().length);

  add(task: Task) {
    // On crée un nouveau tableau : jamais tasks().push(task)
    this.tasks.update(items => [...items, task]);
  }

  addTask() {
    const id = this.tasks().length + 1;
    this.add({ id: id, title: 'Nouvelle tâche ' + id, completed: false, priority: 'medium' });
  }

  clear() {
    this.tasks.set([]);
  }
}
