import { TestBed } from '@angular/core/testing';
import { Catalogue } from './catalogue';

describe('Catalogue', () => {
  it('updates the cart when a product is added', async () => {
    const fixture = TestBed.createComponent(Catalogue);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const addButton = element.querySelector('app-produit button') as HTMLButtonElement;

    addButton.click();
    await fixture.whenStable();

    expect(element.querySelector('.panier h2')?.textContent).toContain('Panier (1)');
    expect(element.querySelector('.panier')?.textContent).toContain('Total : 250 DH');
  });
});
