import { Injectable, inject } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { LocalStorageService } from './local-storage.service';

const KEY_CLIENTES = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  private localStorageService = inject(LocalStorageService);
  private clientes = new Array<Cliente>();

  constructor() {
    this.cargarClientes();
   }

  addCliente(cliente: Cliente){
    this.clientes.push({...cliente});
    this.localStorageService.store(KEY_CLIENTES, JSON.stringify(this.clientes));
    //console.log("Cliente añadido --> ", cliente);
  }

  getClientes(){
    return this.clientes;
  }

  private cargarClientes() {
    const clientes = this.localStorageService.retrieve(KEY_CLIENTES);
    if(clientes){
      this.clientes = JSON.parse(clientes);
    }
  }

}
