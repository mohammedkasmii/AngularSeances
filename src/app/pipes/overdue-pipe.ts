import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overdue',
})
export class OverduePipe implements PipeTransform {
  // Retourne "(en retard)" si la date limite est dépassée, sinon une chaîne vide.
  transform(dueDate?: string): string {
    if (!dueDate) {
      return '';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (new Date(dueDate) < today) {
      return '(en retard)';
    }
    return '';
  }
}
