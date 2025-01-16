import { Routes } from '@angular/router';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';

export const routes: Routes = [
    {path: '', component: ConsultaClienteComponent, pathMatch: 'full'},
    {path: 'nuevo-cliente', component: NuevoClienteComponent, pathMatch: 'full'},
    {path: 'consulta-cliente', component: ConsultaClienteComponent, pathMatch: 'full'},
    {path: '**', component: ConsultaClienteComponent, pathMatch: 'full'},
];
