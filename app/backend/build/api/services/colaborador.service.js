"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colaborador_model_1 = require("../../database/models/colaborador.model");
class ColaboradorService {
    async create(body) {
        return colaborador_model_1.default.create({ ...body });
    }
    async findAll() {
        return colaborador_model_1.default.findAll();
    }
    async findById(id) {
        return colaborador_model_1.default.findOne({ where: { id } });
    }
    async update(id, body) {
        const colaborador = await colaborador_model_1.default.findOne({ where: { id } });
        return colaborador.update({ ...body });
    }
    async delete(id) {
        const colaborador = await colaborador_model_1.default.destroy({ where: { id } });
        return colaborador;
    }
}
exports.default = ColaboradorService;
//# sourceMappingURL=colaborador.service.js.map