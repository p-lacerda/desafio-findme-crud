const { Cliente } = require('../../database/models');

export default class ClienteService {
  public async create(name: string) {

    const cliente = await Cliente.create(name);
    
    return cliente;
  }
}