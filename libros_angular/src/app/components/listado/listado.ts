import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api';
import { LibroComponent } from '../libro/libro';  


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, LibroComponent],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class ListadoComponent implements OnInit {
  lista: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLibros().subscribe(data => {
      this.lista = data.data;
    });
  }
}