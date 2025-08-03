import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reniec } from '../servicios/reniec';


@Component({
  selector: 'app-api-reniec',
  imports: [],
  templateUrl: './api-reniec.html',
  styleUrl: './api-reniec.css'
})
export class ApiReniec {
  buscado = '';
  buscando = false; //manejo de estados

  //Consumiendo servicio
  datos: any = {nom: null, ape: null, sede: null};

  constructor(private reniecServicio: Reniec){}
  
  async buscar() {
    try {
      this.buscando = true;
      let rpta = await this.reniecServicio.mostrarReniec(this.buscado);
      if (rpta) {
        this.datos = rpta;
      } else {
        this.datos = {nom: null, ape: null, sede: null};
      }
    } catch (error) {
      
    } finally {
      this.buscando = false;
    }
  }
}
