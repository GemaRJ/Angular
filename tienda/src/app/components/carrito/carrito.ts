import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

import { CartService } from '../../services/cart';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito {
  private cartService = inject(CartService);

  carrito = this.cartService.carrito;
  total = computed(() => this.cartService.total());

  eliminar(producto: any) {
    this.cartService.eliminar(producto);
  }

  comprar() {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: `Total: ${this.total().toFixed(2)} €`
    });

    this.cartService.vaciar();
  }
}