import { Request, Response } from 'express';
import { colaboradorService as Colaborador } from '../services';

export default class ColaboradorController {
  public async create(req: Request, res: Response) {
    const { name } = req.body;

    const colaborador = await Colaborador.create(name);

    res.status(201).json(colaborador);
  }

  public async getAll(_req: Request, res: Response) {
    const colaborador = await Colaborador.findAll();

    res.status(200).json(colaborador);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const colaborador = await Colaborador.update(Number(id), body);

    res.status(200).json(colaborador);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const colaborador = await Colaborador.delete(Number(id));

    res.status(200).json(colaborador);
  }
}