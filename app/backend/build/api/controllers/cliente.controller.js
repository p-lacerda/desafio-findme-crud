"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ClienteController {
    async create(req, res) {
        const { nome } = req.body;
        const cliente = await services_1.clienteService.create(nome);
        res.status(201).json(cliente);
    }
    async findAll(_req, res) {
        const cliente = await services_1.clienteService.findAll();
        res.status(200).json(cliente);
    }
    async findById(req, res) {
        const { id } = req.params;
        const cliente = await services_1.clienteService.findById(Number(id));
        res.status(200).json(cliente);
    }
    async update(req, res) {
        const { id } = req.params;
        const { body } = req;
        const cliente = await services_1.clienteService.update(Number(id), body);
        res.status(200).json(cliente);
    }
    async delete(req, res) {
        const { id } = req.params;
        const cliente = await services_1.clienteService.delete(Number(id));
        res.status(200).json(cliente);
    }
}
exports.default = ClienteController;
//# sourceMappingURL=cliente.controller.js.map