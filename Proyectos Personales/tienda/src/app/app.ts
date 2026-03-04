import { Component, signal, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Alert } from "./components/alert/alert";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Alert, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = signal('Tienda Angular');

  // Productos
  products: any[] = [];
  filteredProducts: any[] = [];

  // Filtros
  selectedCategory: string = 'all';
  selectedBrand: string = '';
  minPrice: number | null = null;

  // Carrito
  cart: any[] = [];
  cartCount = 0;

  categories: string[] = ['all','smartphones','laptops','fragrances','skincare','home-decoration','furniture','tops'];

  constructor() {}

  async ngOnInit() {
    // Carga todos los productos al iniciar
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    this.products = data.products;
    this.filteredProducts = [...this.products];
  }

  applyFilter() {
    this.filteredProducts = this.products.filter(p => {
      return (
        (this.selectedCategory === 'all' || p.category === this.selectedCategory) &&
        (!this.selectedBrand || p.brand?.toLowerCase().includes(this.selectedBrand.toLowerCase())) &&
        (!this.minPrice || p.price >= this.minPrice)
      );
    });

    Swal.fire({
      icon: 'info',
      title: 'Filtro aplicado',
      text: `Se han filtrado los productos`,
      timer: 1200,
      showConfirmButton: false
    });
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount = this.cart.length;
  }

  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);
    if (index > -1) this.cart.splice(index, 1);
    this.cartCount = this.cart.length;
  }

  checkout() {
    const total = this.cart.reduce((acc, p) => acc + p.price, 0);
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: `Vas a realizar una compra por valor de ${total}`,
    });
    this.cart = [];
    this.cartCount = 0;
  }

  viewCart() {
    Swal.fire({
      icon: 'info',
      title: 'Carrito',
      text: `Tienes ${this.cartCount} productos en el carrito`,
      confirmButtonText: 'Cerrar'
    });
  }
}