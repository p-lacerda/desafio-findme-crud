import ClienteController from './cliente.controller';
import ColaboradorController from './coladorador.controller';
import OrdensController from './ordens.controller';

const clienteController = new ClienteController();
const colaboradorController = new ColaboradorController();
const ordensController = new OrdensController();

export {
  clienteController,
  colaboradorController,
  ordensController
}