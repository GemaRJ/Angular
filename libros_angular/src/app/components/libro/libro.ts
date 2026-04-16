import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro.html',
  styleUrl: './libro.css',
})
export class LibroComponent {
  @Input() datos: any;
}