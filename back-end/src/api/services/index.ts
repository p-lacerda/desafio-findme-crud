import ClienteService from './cliente.service';
import ColaboradorService from './colaborador.service';
import OrdensService from './ordens.service';

const clienteService = new ClienteService();
const colaboradorService = new ColaboradorService();
const ordensService = new OrdensService();

export {
  clienteService,
  colaboradorService,
  ordensService
}