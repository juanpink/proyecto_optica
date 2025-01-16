import { Component, inject } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { FormsModule } from '@angular/forms';
import { ServiceClienteService } from '../../services/service-cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-cliente.component.html',
  styleUrl: './nuevo-cliente.component.css'
})
export class NuevoClienteComponent {
  cliente : Cliente = {};

  clienteService = inject(ServiceClienteService);

  crearCliente() {
    this.clienteService.addCliente(this.cliente);
    this.cliente = {};
  }

}
