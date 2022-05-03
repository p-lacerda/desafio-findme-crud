"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordensService = exports.colaboradorService = exports.clienteService = void 0;
const cliente_service_1 = require("./cliente.service");
const colaborador_service_1 = require("./colaborador.service");
const ordens_service_1 = require("./ordens.service");
const clienteService = new cliente_service_1.default();
exports.clienteService = clienteService;
const colaboradorService = new colaborador_service_1.default();
exports.colaboradorService = colaboradorService;
const ordensService = new ordens_service_1.default();
exports.ordensService = ordensService;
//# sourceMappingURL=index.js.map