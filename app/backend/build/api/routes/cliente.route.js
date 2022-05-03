"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const cliente_middleware_1 = require("../middlewares/cliente.middleware");
class ClienteRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', controllers_1.clienteController.findAll);
        this.router.post('/', [cliente_middleware_1.default.nameValidation, controllers_1.clienteController.create]);
        this.router.patch('/:id', [cliente_middleware_1.default.nameValidation, controllers_1.clienteController.update]);
        this.router.delete('/:id', controllers_1.clienteController.delete);
    }
}
exports.default = ClienteRouter;
//# sourceMappingURL=cliente.route.js.map