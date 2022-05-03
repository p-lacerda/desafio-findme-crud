"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class OrdensController {
    async create(req, res) {
        const { clienteId, problemaRelatado, colaboradorId } = req.body;
        const ordens = await services_1.ordensService.create({ clienteId, problemaRelatado, colaboradorId });
        res.status(201).json(ordens);
    }
    async findAll(_req, res) {
        const ordens = await services_1.ordensService.findAll();
        res.status(200).json(ordens);
    }
    async findById(req, res) {
        const { id } = req.params;
        const ordens = await services_1.ordensService.findById(Number(id));
        res.status(200).json(ordens);
    }
    async update(req, res) {
        const { id } = req.params;
        const { clienteId, problemaRelatado, colaboradorId } = req.body;
        const ordens = await services_1.ordensService.update(Number(id), { clienteId, problemaRelatado, colaboradorId });
        res.status(200).json(ordens);
    }
    async delete(req, res) {
        const { id } = req.params;
        const ordens = await services_1.ordensService.delete(Number(id));
        res.status(200).json(ordens);
    }
}
exports.default = OrdensController;
//# sourceMappingURL=ordens.controller.js.map