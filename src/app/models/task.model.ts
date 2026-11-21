export interface Task {
  id: number;
  title: string;
  completed: boolean;
  // Union littérale : seules ces trois valeurs sont autorisées.
  // TypeScript refuse toute autre chaîne au moment du développement, par exemple :
  //   const t: Task = { id: 1, title: 'Lire', completed: false, priority: 'urgent' };
  //   -> erreur : 'urgent' n'est pas autorisé
  // Attention : les types disparaissent à l'exécution, un JSON reçu n'est pas vérifié.
  priority: 'low' | 'medium' | 'high';
  dueDate?: string; // propriété optionnelle
}
