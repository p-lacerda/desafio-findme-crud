import ClienteRouter from './cliente.route';
import ColaboradorRouter from './colaborador.route';
import OrdensRouter from './ordens.route';

const clienteRouter = new ClienteRouter().router;
const colaboradorRouter = new ColaboradorRouter().router;
const ordensRouter = new OrdensRouter().router;

export {
  clienteRouter,
  colaboradorRouter,
  ordensRouter
}