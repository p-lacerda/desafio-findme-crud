import { Request, Response } from 'express';
import { clienteService as Cliente } from '../services';

export default class ClienteController {
  public async create(req: Request, res: Response) {
    const { name } = req.body;

    const cliente = await Cliente.create(name);

  }

  public async getAll(req: Request, res: Response) {

  }

  public async update(req: Request, res: Response) {

  }

  public async delete(req: Request, res: Response) {

  }
}