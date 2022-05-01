import { Request, Response, NextFunction } from 'express';


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
}