import { Request, Response, NextFunction } from 'express';
import { colaboradorService as Colaborador } from '../services';
import { ordensService as Ordens } from '../services';
import { clienteService as Cliente } from '../services';


export default class OrdensValidations {
  public static async clienteValidation(req: Request, res: Response, next: NextFunction) {
    const { clienteId } = req.body;

    if (clienteId === null || clienteId === undefined) {
      return res.status(401).json({ message: 'Os campos devem estar preenchidos' })
    }

    if (clienteId < 0) {
      return res.status(401).json({ message: 'O campo clienteId não é válido' });
    }

    next();
  }

  public static async colaboradorValidation(req: Request, res: Response, next: NextFunction) {
    const { colaboradorId } = req.body;

    if (colaboradorId === null || colaboradorId === undefined) {
      return res.status(401).json({ message: 'Os campos devem estar preenchidos' })
    }

    if (colaboradorId < 0) {
      return res.status(401).json({ message: 'O campo colaboradorId não é válido' });
    }

    next();
  }

  public static async problemaValidation(req: Request, res: Response, next: NextFunction) {
    const { problemaRelatado } = req.body;

    if (problemaRelatado === null || problemaRelatado === undefined) {
      return res.status(401).json({ message: 'Os campos devem estar preenchidos' })
    }

    if (problemaRelatado === "") {
      return res.status(401).json({ message: 'O campo problemaRelatado está vazio' });
    }

    next();
  }

  public static async idValidation(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const ordens = await Ordens.findById(Number(id));

    if (Object.keys(ordens || {}).length === 0) {
      return res.status(401).json({ message: 'A ordem de serviço não existe' });
    }

    if (id === null || id === undefined) {
      return res.status(401).json({ message: 'O parametro id está vazio' })
    }

    next();
  }

  public static async idExistsValidation(req: Request, res: Response, next: NextFunction) {
    const { clienteId, colaboradorId } = req.body;

    const colaborador = await Colaborador.findById(Number(colaboradorId));

    if (Object.keys(colaborador || {}).length === 0) {
      return res.status(401).json({ message: 'O colaborador não existe' });
    }

    const cliente = await Cliente.findById(Number(clienteId));


    if (Object.keys(cliente || {}).length === 0) {
      return res.status(401).json({ message: 'O cliente não existe' });
    }

    next();
  }
}