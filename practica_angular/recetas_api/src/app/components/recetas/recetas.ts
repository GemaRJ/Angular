import { Component, OnInit, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ApiService } from '../../services/api';

@Component({
  selector: 'app-recetas',
  imports: [FormsModule],
  templateUrl: './recetas.html',
})
export class Recetas implements OnInit {

  tags = signal<string[]>([]);

  recetas = signal<any[]>([]);

  tagSeleccionado = signal('');

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getTags().subscribe((data) => {

      this.tags.set(data);

      this.tagSeleccionado.set(data[0]);

      this.buscarRecetas(data[0]);

    });

  }

  buscarRecetas(tag: string) {

    this.tagSeleccionado.set(tag);

    this.apiService
      .getRecetasPorTag(tag)
      .subscribe((data) => {

        this.recetas.set(data.recipes);

      });

  }

}