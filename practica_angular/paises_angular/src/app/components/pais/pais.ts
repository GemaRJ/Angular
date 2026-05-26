import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais',
  imports: [],
  templateUrl: './pais.html',
  styleUrl: './pais.css'
})
export class Pais {

  @Input() datos: any;

  getIdiomas() {

    if (!this.datos?.languages) {
      return [];
    }

    return Object.values(this.datos.languages);

  }

}

