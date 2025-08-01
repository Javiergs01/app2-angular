import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  mensaje = 'Sentencia de prueba';
  fecha = new Date();
}
