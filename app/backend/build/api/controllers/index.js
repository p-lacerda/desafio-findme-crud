"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordensController = exports.colaboradorController = exports.clienteController = void 0;
const cliente_controller_1 = require("./cliente.controller");
const coladorador_controller_1 = require("./coladorador.controller");
const ordens_controller_1 = require("./ordens.controller");
const clienteController = new cliente_controller_1.default();
exports.clienteController = clienteController;
const colaboradorController = new coladorador_controller_1.default();
exports.colaboradorController = colaboradorController;
const ordensController = new ordens_controller_1.default();
exports.ordensController = ordensController;
//# sourceMappingURL=index.js.map