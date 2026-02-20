import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
lista?:string []=[];
nombre?:string;

agregarTarea(){
  //comprobación de que lo que esta en el input no es un undefined
this.lista?.push(this.nombre!!);
}
}
