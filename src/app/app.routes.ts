import { Routes } from '@angular/router';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: 'nuevo-cliente', component: NuevoClienteComponent, pathMatch: 'full'},
    {path: 'consulta-cliente', component: ConsultaClienteComponent, pathMatch: 'full'},
    /*{path: '', component: ConsultaClienteComponent, pathMatch: 'full'},*/
    {path: '', redirectTo: 'consulta-cliente', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];
