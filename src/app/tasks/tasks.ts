import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = [
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', dueDate: '2026-11-25' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-12-05' },
  ];
}
