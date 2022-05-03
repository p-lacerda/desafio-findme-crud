"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_model_1 = require("../../database/models/cliente.model");
class ClienteService {
    async create(nome) {
        return cliente_model_1.default.create({ nome });
    }
    async findAll() {
        return cliente_model_1.default.findAll();
    }
    async findById(id) {
        return cliente_model_1.default.findOne({ where: { id } });
    }
    async update(id, body) {
        // definir types posteriormente
        const cliente = await cliente_model_1.default.findOne({ where: { id } });
        return cliente.update(body);
    }
    async delete(id) {
        const cliente = await cliente_model_1.default.destroy({ where: { id } });
        return cliente;
    }
}
exports.default = ClienteService;
//# sourceMappingURL=cliente.service.js.map