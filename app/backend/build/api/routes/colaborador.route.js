"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const colaborador_middleware_1 = require("../middlewares/colaborador.middleware");
class ColaboradorRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', controllers_1.colaboradorController.findAll);
        this.router.post('/', [
            colaborador_middleware_1.default.nameValidation,
            colaborador_middleware_1.default.emailValidation,
            colaborador_middleware_1.default.senhaValidation,
            controllers_1.colaboradorController.create
        ]);
        this.router.patch('/:id', [
            colaborador_middleware_1.default.nameValidation,
            colaborador_middleware_1.default.emailValidation,
            colaborador_middleware_1.default.senhaValidation,
            colaborador_middleware_1.default.idValidation,
            colaborador_middleware_1.default.idExistsValidation,
            controllers_1.colaboradorController.update
        ]);
        this.router.delete('/:id', controllers_1.colaboradorController.delete);
    }
}
exports.default = ColaboradorRouter;
//# sourceMappingURL=colaborador.route.js.map