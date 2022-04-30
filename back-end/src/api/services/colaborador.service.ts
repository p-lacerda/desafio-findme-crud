import Colaborador from '../../database/models/colaborador.model';
import { ColaboradorBody } from "../interfaces/colaborador.inteface";

export default class ColaboradorService {
  public async create(body: ColaboradorBody) {
    
    return Colaborador.create({ ...body });
  }

  public async findAll() {
    
    return Colaborador.findAll();
  }

  public async update(id: number, body: ColaboradorBody) {

    const colaborador: null | any = await Colaborador.findOne({ where: { id } });
    
    return colaborador.update({ ...body });
  }

  public async delete(id: number) {

    const colaborador = await Colaborador.destroy({ where: { id } });
    
    return colaborador;
  }
}