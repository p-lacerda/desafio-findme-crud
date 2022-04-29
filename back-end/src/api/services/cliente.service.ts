const { Cliente } = require('../../database/models');

type bodyCliente = {
  name: string,
}

export default class ClienteService {
  public async create(name: string) {

    const cliente = await Cliente.create(name);
    
    return cliente;
  }
}