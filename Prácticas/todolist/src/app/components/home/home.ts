import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
correo?:string;  /* Es lo mismo que poner: nombre?: string | indefined; */
pass?:string; 
validacion?:boolean ;

validarUsuario() {
    if (this.correo == "gema@gmail.com" && this.pass == "1234") {
      this.validacion = true;
    } else {
      this.validacion = false; // Esto permite que el @else de tu HTML funcione
    }
  }
}