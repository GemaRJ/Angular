import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api';
import { Pais } from '../pais/pais';

@Component({
  selector: 'app-listado',
  imports: [Pais],
  templateUrl: './listado.html',
  
})
export class Listado implements OnInit {

  lista = signal<any[]>([]);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPaises().subscribe((data) => {
      this.lista.set(data);
    });
  }

}