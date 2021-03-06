import Cliente from '../../database/models/cliente.model';
import Colaborador from '../../database/models/colaborador.model';
import Ordens from '../../database/models/ordens.model';
import { OrdensBody, OdernsReturn } from "../interfaces/ordens.interface";

export default class OrdensService {
  public async create(body: OrdensBody) {
    
    return Ordens.create({ ...body });
  }

  public async findAll() {
    
    return Ordens.findAll({
      attributes: { exclude: ['cliente_id', 'colaborador_id'] },
      include: [
        { model: Cliente, as: 'clienteInfo', attributes: ['nome'] },
        { model: Colaborador, as: 'colaboradorInfo', attributes: ['nome']}
      ]
    });
  }

  public async findById(id: Number) {
    
    return Ordens.findOne({ where: { id } });
  }

  public async update(id: number, body: OrdensBody) {

    const ordens: null | any = await Ordens.findOne({ where: { id } });
    
    return ordens.update(body);
  }

  public async delete(id: number) {

    const ordens = await Ordens.destroy({ where: { id } });
    
    return ordens;
  }
}