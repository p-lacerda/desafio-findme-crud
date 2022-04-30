const { Cliente } = require('../../database/models');

type bodyCliente = {
  name: string,
}

export default class ClienteService {
  public async create(name: string) {
    
    return Cliente.create(name);
  }

  public async findAll() {
    
    return Cliente.findAll();
  }

  public async update(id: number, body: bodyCliente) {

    const cliente = await Cliente.findOne({ where: id });
    
    return cliente.update(body);
  }

  public async delete(id: number) {

    const cliente = await Cliente.destroy({ where: id });
    
    return cliente;
  }
}