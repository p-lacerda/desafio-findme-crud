"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const ordens_middleware_1 = require("../middlewares/ordens.middleware");
class OrdensRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', controllers_1.ordensController.findAll);
        this.router.post('/', [
            ordens_middleware_1.default.clienteValidation,
            ordens_middleware_1.default.colaboradorValidation,
            ordens_middleware_1.default.idExistsValidation,
            controllers_1.ordensController.create
        ]);
        this.router.patch('/:id', [
            ordens_middleware_1.default.clienteValidation,
            ordens_middleware_1.default.colaboradorValidation,
            ordens_middleware_1.default.idValidation,
            ordens_middleware_1.default.idExistsValidation,
            controllers_1.ordensController.update
        ]);
        this.router.delete('/:id', controllers_1.ordensController.delete);
    }
}
exports.default = OrdensRouter;
//# sourceMappingURL=ordens.route.js.map