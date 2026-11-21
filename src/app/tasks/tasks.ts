import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { OverduePipe } from '../pipes/overdue-pipe';

@Component({
  selector: 'app-tasks',
  imports: [DatePipe, UpperCasePipe, OverduePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks: Task[] = [
    { id: 1, title: 'Lire le cours Angular', completed: true, priority: 'high', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', completed: false, priority: 'medium', dueDate: '2026-11-25' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low', dueDate: '2026-12-05' },
  ];
}
