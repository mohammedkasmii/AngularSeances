import { Component, input, output } from '@angular/core';
import { ProduitModel } from '../models/produit.model';

@Component({
  selector: 'app-produit',
  imports: [],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  produit = input.required<ProduitModel>();
  ajouter = output<ProduitModel>();

  ajouterAuPanier() {
    this.ajouter.emit(this.produit());
  }
}
