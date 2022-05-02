import { Router } from 'express';
import { colaboradorController  } from '../controllers';
import ColaboradorValidations from '../middlewares/colaborador.middleware';

export default class ColaboradorRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.router.get('/', colaboradorController.findAll);
    this.router.post('/', 
    [
      ColaboradorValidations.nameValidation,
      ColaboradorValidations.emailValidation,
      ColaboradorValidations.senhaValidation,
      colaboradorController.create
    ]
    );
    this.router.patch('/:id',
      [
        ColaboradorValidations.nameValidation,
        ColaboradorValidations.emailValidation,
        ColaboradorValidations.senhaValidation,
        ColaboradorValidations.idValidation,
        ColaboradorValidations.idExistsValidation,
        colaboradorController.update
      ]
      );
    this.router.delete('/:id', colaboradorController.delete);
  }
}