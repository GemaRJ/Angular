import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Home } from './components/home/home';
import { Add } from './components/add/add';
import { List } from './components/list/list';
import { Buscar } from './components/buscar/buscar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
