import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api';

@Component({
  selector: 'app-moneda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moneda.html',
  styleUrl: './moneda.css',
})
export class Moneda implements OnInit {
  cantidad = 1;
  origen = 'EUR';
  destino = 'USD';

  resultado: number | null = null;
  error = '';
  cargando = false;

  monedas: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTasas('EUR').subscribe({
      next: (data) => {
        this.monedas = [data.base_code, ...Object.keys(data.rates)];
      },
      error: () => {
        this.error = 'Error al cargar monedas';
      },
    });
  }

  convertir() {
    this.error = '';
    this.resultado = null;

    if (this.cantidad <= 0) {
      this.error = 'Introduce una cantidad válida';
      return;
    }

    if (this.origen === this.destino) {
      this.resultado = this.cantidad;
      return;
    }

    this.cargando = true;

    this.apiService.getTasas(this.origen).subscribe({
      next: (data) => {
        const tasa = data.rates[this.destino];
        this.resultado = this.cantidad * tasa;
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error al convertir moneda';
        this.cargando = false;
      },
    });
  }
}