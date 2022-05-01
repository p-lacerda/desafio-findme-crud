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

  public static async emailValidation(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const isValidEmail = (email: string) => {
      const EMAIL_REGEX = /\S+@\S+\.\S+/;
      return EMAIL_REGEX.test(email);
    };

    if (email === null || email === undefined) {
      return res.status(401).json({ message: 'Os campos devem estar preenchidos' })
    }

    if (email === "") {
      return res.status(401).json({ message: 'O campo email está vazio' });
    }

    if (!isValidEmail(email)) {
      return res.status(401).json({ message: 'O campo email não é válido' });
    }

    next();
  }

  public static async senhaValidation(req: Request, res: Response, next: NextFunction) {
    const { senha } = req.body;

    if (senha === null || senha === undefined) {
      return res.status(401).json({ message: 'Os campos devem estar preenchidos' })
    }

    if (senha === "") {
      return res.status(401).json({ message: 'O campo senha está vazio' });
    }

    if (senha.length < 6) {
      return res.status(401).json({ message: 'O campo senha tem menos de 6 caracteres' });
    }

    next();
  }
}