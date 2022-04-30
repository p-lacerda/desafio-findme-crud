import { Request, Response } from 'express';
import { ordensService as Ordens } from '../services';

export default class OrdensController {
  public async create(req: Request, res: Response) {
    const { data, clienteId, problemaRelatado, colaboradorId } = req.body;

    const ordens = await Ordens.create({ data, clienteId, problemaRelatado, colaboradorId });

    res.status(201).json(ordens);
  }

  public async getAll(_req: Request, res: Response) {
    const ordens = await Ordens.findAll();

    res.status(200).json(ordens);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { data, clienteId, problemaRelatado, colaboradorId } = req.body;


    const ordens = await Ordens.update(Number(id), { data, clienteId, problemaRelatado, colaboradorId });

    res.status(200).json(ordens);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const ordens = await Ordens.delete(Number(id));

    res.status(200).json(ordens);
  }
}