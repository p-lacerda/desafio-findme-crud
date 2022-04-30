import ClienteService from './cliente.service';
import ColaboradorService from './colaborador.service';

const clienteService = new ClienteService();
const colaboradorService = new ColaboradorService();

export {
  clienteService,
  colaboradorService
}