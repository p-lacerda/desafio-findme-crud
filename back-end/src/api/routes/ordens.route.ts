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
    this.router.get('/', ordensController.getAll);
    this.router.post('/', [
      OrdensValidations.clienteValidation,
      OrdensValidations.colaboradorValidation,
      ordensController.create
    ]);
    this.router.patch('/:id', [
      OrdensValidations.clienteValidation,
      OrdensValidations.colaboradorValidation,
      ordensController.update
    ]);
    this.router.delete('/:id', ordensController.delete);
  }
}