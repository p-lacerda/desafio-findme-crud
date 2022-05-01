import { Router } from 'express';
import { ordensController } from '../controllers';
import OrdensValidations from '../middlewares/ordens.middleware';

export default class OrdensRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.router.get('/', ordensController.findAll);
    this.router.post('/', [
      OrdensValidations.clienteValidation,
      OrdensValidations.colaboradorValidation,
      OrdensValidations.idExistsValidation,
      ordensController.create
    ]);
    this.router.patch('/:id', [
      OrdensValidations.clienteValidation,
      OrdensValidations.colaboradorValidation,
      OrdensValidations.idValidation,
      OrdensValidations.idExistsValidation,
      ordensController.update
    ]);
    this.router.delete('/:id', ordensController.delete);
  }
}