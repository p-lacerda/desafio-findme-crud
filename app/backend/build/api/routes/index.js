"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordensRouter = exports.colaboradorRouter = exports.clienteRouter = void 0;
const cliente_route_1 = require("./cliente.route");
const colaborador_route_1 = require("./colaborador.route");
const ordens_route_1 = require("./ordens.route");
const clienteRouter = new cliente_route_1.default().router;
exports.clienteRouter = clienteRouter;
const colaboradorRouter = new colaborador_route_1.default().router;
exports.colaboradorRouter = colaboradorRouter;
const ordensRouter = new ordens_route_1.default().router;
exports.ordensRouter = ordensRouter;
//# sourceMappingURL=index.js.map