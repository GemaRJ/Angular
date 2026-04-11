import { Component, OnInit, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServicesApi } from '../../services/api';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  private apiService = inject(ServicesApi);
  private cartService = inject(CartService);

  productos: Product[] = [];
  productosFiltrados: (Product & { verDetalle?: boolean })[] = [];

  categorias: { etiqueta: string; valor: string }[] = [
    { etiqueta: 'Belleza', valor: 'beauty' },
    { etiqueta: 'Fragancias', valor: 'fragrances' },
    { etiqueta: 'Muebles', valor: 'furniture' },
    { etiqueta: 'Comestibles', valor: 'groceries' }
  ];

  categoriaSeleccionada: string = 'all';
  marcaSeleccionada: string = '';
  precioMinimo: number | null = null;

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((datos: Product[]) => {
      this.productos = datos;
      this.productosFiltrados = datos.map(producto => ({
        ...producto,
        verDetalle: false
      }));
    });
  }

  aplicarFiltro(): void {
    this.productosFiltrados = this.productos
      .filter((p: Product) => {
        const porCategoria =
          this.categoriaSeleccionada === 'all' ||
          p.category === this.categoriaSeleccionada;

        const porMarca =
          !this.marcaSeleccionada ||
          p.brand?.toLowerCase().includes(this.marcaSeleccionada.toLowerCase());

        const porPrecio =
          !this.precioMinimo || p.price >= this.precioMinimo;

        return porCategoria && porMarca && porPrecio;
      })
      .map(producto => ({
        ...producto,
        verDetalle: false
      }));
  }

  agregarAlCarrito(producto: Product): void {
    this.cartService.agregar(producto);

    Swal.fire({
      icon: 'success',
      title: 'Producto añadido',
      text: `${producto.title} añadido al carrito`,
      timer: 1200,
      showConfirmButton: false
    });
  }

  mostrarDetalle(id: number): void {
    this.productosFiltrados = this.productosFiltrados.map(producto => {
      if (producto.id === id) {
        return { ...producto, verDetalle: !producto.verDetalle };
      }
      return producto;
    });
  }
}