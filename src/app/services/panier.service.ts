import { Injectable, computed, signal } from '@angular/core';
import { ProduitModel } from '../models/produit.model';

@Injectable({ providedIn: 'root' })
export class PanierService {
  private state = signal<ProduitModel[]>([]);

  items = this.state.asReadonly();
  count = computed(() => this.items().length);
  total = computed(() => this.items().reduce((sum, produit) => sum + produit.prix, 0));

  add(produit: ProduitModel) {
    this.state.update((items) => [...items, produit]);
  }
}
