import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Pipes } from './pipes/pipes';


export const routes: Routes = [
    { path: 'formulario', component: Formulario },
    { path: 'pipes', component: Pipes }
];
