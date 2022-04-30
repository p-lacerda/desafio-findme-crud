const { Colaborador } = require('../../database/models');

type bodyColaborador = {
  name: string,
  email: string,
  senha: string
}

export default class ColaboradorService {
  public async create(name: string) {
    
    return Colaborador.create(name);
  }

  public async findAll() {
    
    return Colaborador.findAll();
  }

  public async update(id: number, body: bodyColaborador) {

    const cliente = await Colaborador.findOne({ where: id });
    
    return cliente.update(body);
  }

  public async delete(id: number) {

    const cliente = await Colaborador.destroy({ where: id });
    
    return cliente;
  }
}