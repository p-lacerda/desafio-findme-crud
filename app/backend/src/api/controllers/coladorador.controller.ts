import { Request, Response } from 'express';
import { colaboradorService as Colaborador } from '../services';

export default class ColaboradorController {
  public async create(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const colaborador = await Colaborador.create({ nome, email, senha });

    res.status(201).json(colaborador);
  }

  public async findAll(_req: Request, res: Response) {
    const colaborador = await Colaborador.findAll();

    res.status(200).json(colaborador);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;

    const colaborador = await Colaborador.findById(Number(id));

    res.status(200).json(colaborador);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const colaborador = await Colaborador.update(Number(id), { nome, email, senha });

    res.status(200).json(colaborador);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const colaborador = await Colaborador.delete(Number(id));

    res.status(200).json(colaborador);
  }
}