import { Component } from '@angular/core';
import { Operaciones } from '../../services/operaciones';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado {

  constructor(public operacionesService: Operaciones) {}

}