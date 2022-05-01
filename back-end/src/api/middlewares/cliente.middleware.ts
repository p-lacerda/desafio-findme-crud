import { Request, Response, NextFunction } from 'express';

export default class ClienteValidations {
  public static async nameValidation(req: Request, res: Response, next: NextFunction) {
    const { nome } = req.body;

    if (nome === null || nome === undefined) {
      return res.status(401).json({ message: 'Os campos devem estar preenchidos' })
    }

    if (nome === "") {
      return res.status(401).json({ message: 'O campo nome está vazio' });
    }

    next();
  }
}