import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceClienteService } from '../../services/service-cliente.service';

@Component({
  selector: 'app-consulta-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-cliente.component.html',
  styleUrl: './consulta-cliente.component.css'
})
export class ConsultaClienteComponent {
  clienteService = inject(ServiceClienteService);
}
