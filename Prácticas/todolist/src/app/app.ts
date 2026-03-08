import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink, Router, RouterLinkWithHref } from '@angular/router';
import { Home } from './components/home/home';
import { Add } from './components/add/add';
import { List } from './components/list/list';
import { Buscar } from './components/buscar/buscar';
import { Prioridades } from './components/prioridades/prioridades';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkWithHref], /* INYECTABLE */
  templateUrl: './app.html',
  styleUrl: './app.css'
})
/* Elegir Router pero de angular, no confundirse. Elemento que inyecta. Desde que te declaras un contructor privado puedes 
acceder a sus métodos y propiedades desdee cualquier parte */
export class App {
  constructor(private gestorRutas: Router) {}
  
    navegar(param:string){
      this.gestorRutas.navigate(['prioridades', param]);
    }

 
}
