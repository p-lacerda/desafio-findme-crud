import { Request, Response } from 'express';
import { clienteService as Cliente } from '../services';

export default class ClienteController {
  public async create(req: Request, res: Response) {
    const { name } = req.body;

    const cliente = await Cliente.create(name);

    res.status(201).json(cliente);
  }

  public async getAll(_req: Request, res: Response) {
    const cliente = await Cliente.findAll();

    res.status(200).json(cliente);
  }

  public async update(req: Request, res: Response) {

  }

  public async delete(req: Request, res: Response) {

  }
}