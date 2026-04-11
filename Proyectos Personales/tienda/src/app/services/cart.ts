import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // estado del carrito
  carrito = signal<Product[]>([]);

  // contador (muy útil para header)
  cantidad = computed(() => this.carrito().length);

  // total calculado
  total = computed(() =>
    this.carrito().reduce((acc, p) => acc + p.price, 0)
  );

  agregar(producto: Product): void {
    this.carrito.update(items => [...items, producto]);
  }

  eliminar(producto: Product): void {
    this.carrito.update(items =>
      items.filter(p => p.id !== producto.id)
    );
  }

  vaciar(): void {
    this.carrito.set([]);
  }
}