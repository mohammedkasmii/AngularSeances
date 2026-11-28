import { Component, inject } from '@angular/core';
import { ProduitModel } from '../models/produit.model';
import { Produit } from '../produit/produit';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-catalogue',
  imports: [Produit],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  panier = inject(PanierService);
  produits: ProduitModel[] = [
    { id: 1, nom: 'Clavier', prix: 250 },
    { id: 2, nom: 'Souris', prix: 120 },
    { id: 3, nom: 'Casque', prix: 350 },
  ];

  ajouterAuPanier(produit: ProduitModel) {
    this.panier.add(produit);
  }
}
