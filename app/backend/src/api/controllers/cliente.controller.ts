import { Request, Response } from 'express';
import { clienteService as Cliente } from '../services';

export default class ClienteController {
  public async create(req: Request, res: Response) {
    const { nome } = req.body;

    const cliente = await Cliente.create(nome);

    res.status(201).json(cliente);
  }

  public async findAll(_req: Request, res: Response) {
    const cliente = await Cliente.findAll();

    res.status(200).json(cliente);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;

    const cliente = await Cliente.findById(Number(id));

    res.status(200).json(cliente);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const cliente = await Cliente.update(Number(id), body);

    res.status(200).json(cliente);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const cliente = await Cliente.delete(Number(id));

    res.status(200).json(cliente);
  }
}