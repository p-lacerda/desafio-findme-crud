import { Router } from 'express';
import { clienteController  } from '../controllers';
import ClienteValidations from '../middlewares/cliente.middleware';

export default class ClienteRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.router.get('/', clienteController.findAll);
    this.router.post('/', [ClienteValidations.nameValidation ,clienteController.create]);
    this.router.patch('/:id', [ClienteValidations.nameValidation, clienteController.update]);
    this.router.delete('/:id', clienteController.delete);
  }
}