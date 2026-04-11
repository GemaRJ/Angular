import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

interface MensajeContacto {
  nombre: string;
  email: string;
  mensaje: string;
  fecha: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto implements OnInit {
  private platformId = inject(PLATFORM_ID);

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  historialMensajes: MensajeContacto[] = [];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const mensajesGuardados = localStorage.getItem('historialContactos');
      if (mensajesGuardados) {
        this.historialMensajes = JSON.parse(mensajesGuardados);
      }
    }
  }

  enviarFormulario(formulario: NgForm) {
    if (formulario.invalid) {
      formulario.control.markAllAsTouched();

      Swal.fire({
        icon: 'warning',
        title: 'Campos obligatorios',
        text: 'Por favor, completa correctamente todos los campos'
      });
      return;
    }

    const nuevoMensaje: MensajeContacto = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
      fecha: new Date().toLocaleString('es-ES')
    };

    this.historialMensajes.unshift(nuevoMensaje);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('historialContactos', JSON.stringify(this.historialMensajes));
    }

    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Tu mensaje se ha enviado correctamente'
    });

    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    formulario.resetForm();
  }

  borrarHistorial() {
    this.historialMensajes = [];

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('historialContactos');
    }

    Swal.fire({
      icon: 'success',
      title: 'Historial borrado',
      text: 'Se han eliminado todos los mensajes'
    });
  }
}