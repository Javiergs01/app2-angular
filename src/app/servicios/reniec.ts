import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Reniec {
  constructor(private http:HttpClient) {}

  mostrarReniec(dni: string) {
    let data: any = [
      { dni: '12345678', nom: 'Kimberly', ape: 'Arias', sede: 'Chiclayo' },
      { dni: '13579246', nom: 'Angel', ape: 'Garcia', sede: 'Lima' },
      { dni: '15792434', nom: 'Humberto', ape: 'Lopez', sede: 'Tumbes' },
      { dni: '76905622', nom: 'Sara', ape: 'Suarez', sede: 'Chincha' }
    ];

    let rpta = data.find((persona: any) => persona.dni == dni);
    return new Promise(resolve => {
      setTimeout(() => resolve(rpta), 2000)
    });
  }
}
