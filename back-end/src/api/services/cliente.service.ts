import Cliente from '../../database/models/cliente.model';

type bodyCliente = {
  name: string,
}

export default class ClienteService {
  public async create(nome: string) {
    
    return Cliente.create({ nome });
  }

  public async findAll() {
    
    return Cliente.findAll();
  }

  public async findById(id: Number) {
    
    return Cliente.findOne({ where: { id } });
  }


  public async update(id: number, body: bodyCliente) {

    // definir types posteriormente
    const cliente: null | any = await Cliente.findOne({ where: { id } });
    
    return cliente.update(body);
  }

  public async delete(id: number) {

    const cliente = await Cliente.destroy({ where: { id } });
    
    return cliente;
  }
}