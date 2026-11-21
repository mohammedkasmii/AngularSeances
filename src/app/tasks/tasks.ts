import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = [
    { id: 1, title: 'Lire le cours Angular' },
    { id: 2, title: 'Installer le CLI' },
    { id: 3, title: 'Créer TaskFlow' },
  ];
}
