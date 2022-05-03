"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_model_1 = require("../../database/models/cliente.model");
const colaborador_model_1 = require("../../database/models/colaborador.model");
const ordens_model_1 = require("../../database/models/ordens.model");
class OrdensService {
    async create(body) {
        return ordens_model_1.default.create({ ...body });
    }
    async findAll() {
        return ordens_model_1.default.findAll({
            attributes: { exclude: ['cliente_id', 'colaborador_id'] },
            include: [
                { model: cliente_model_1.default, as: 'clienteInfo', attributes: ['nome'] },
                { model: colaborador_model_1.default, as: 'colaboradorInfo', attributes: ['nome'] }
            ]
        });
    }
    async findById(id) {
        return ordens_model_1.default.findOne({ where: { id } });
    }
    async update(id, body) {
        const ordens = await ordens_model_1.default.findOne({ where: { id } });
        return ordens.update(body);
    }
    async delete(id) {
        const ordens = await ordens_model_1.default.destroy({ where: { id } });
        return ordens;
    }
}
exports.default = OrdensService;
//# sourceMappingURL=ordens.service.js.map