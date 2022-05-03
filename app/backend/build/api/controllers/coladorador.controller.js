"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ColaboradorController {
    async create(req, res) {
        const { nome, email, senha } = req.body;
        const colaborador = await services_1.colaboradorService.create({ nome, email, senha });
        res.status(201).json(colaborador);
    }
    async findAll(_req, res) {
        const colaborador = await services_1.colaboradorService.findAll();
        res.status(200).json(colaborador);
    }
    async findById(req, res) {
        const { id } = req.params;
        const colaborador = await services_1.colaboradorService.findById(Number(id));
        res.status(200).json(colaborador);
    }
    async update(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const colaborador = await services_1.colaboradorService.update(Number(id), { nome, email, senha });
        res.status(200).json(colaborador);
    }
    async delete(req, res) {
        const { id } = req.params;
        const colaborador = await services_1.colaboradorService.delete(Number(id));
        res.status(200).json(colaborador);
    }
}
exports.default = ColaboradorController;
//# sourceMappingURL=coladorador.controller.js.map