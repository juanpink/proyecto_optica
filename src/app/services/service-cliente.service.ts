import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  private clientes = new Array<Cliente>();

  constructor() { }

  addCliente(cliente: Cliente){
    this.clientes.push({...cliente});
    //console.log("Cliente añadido --> ", cliente);
  }

  getClientes(){
    return this.clientes;
  }

}
