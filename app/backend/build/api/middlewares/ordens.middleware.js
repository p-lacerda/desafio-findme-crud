"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const services_2 = require("../services");
const services_3 = require("../services");
class OrdensValidations {
    static async clienteValidation(req, res, next) {
        const { clienteId } = req.body;
        if (clienteId === null || clienteId === undefined) {
            return res.status(401).json({ message: 'Os campos devem estar preenchidos' });
        }
        if (clienteId < 0) {
            return res.status(401).json({ message: 'O campo clienteId não é válido' });
        }
        next();
    }
    static async colaboradorValidation(req, res, next) {
        const { colaboradorId } = req.body;
        if (colaboradorId === null || colaboradorId === undefined) {
            return res.status(401).json({ message: 'Os campos devem estar preenchidos' });
        }
        if (colaboradorId < 0) {
            return res.status(401).json({ message: 'O campo colaboradorId não é válido' });
        }
        next();
    }
    static async problemaValidation(req, res, next) {
        const { problemaRelatado } = req.body;
        if (problemaRelatado === null || problemaRelatado === undefined) {
            return res.status(401).json({ message: 'Os campos devem estar preenchidos' });
        }
        if (problemaRelatado === "") {
            return res.status(401).json({ message: 'O campo problemaRelatado está vazio' });
        }
        next();
    }
    static async idValidation(req, res, next) {
        const { id } = req.params;
        const ordens = await services_2.ordensService.findById(Number(id));
        if (Object.keys(ordens || {}).length === 0) {
            return res.status(401).json({ message: 'A ordem de serviço não existe' });
        }
        if (id === null || id === undefined) {
            return res.status(401).json({ message: 'O parametro id está vazio' });
        }
        next();
    }
    static async idExistsValidation(req, res, next) {
        const { clienteId, colaboradorId } = req.body;
        const colaborador = await services_1.colaboradorService.findById(Number(colaboradorId));
        if (Object.keys(colaborador || {}).length === 0) {
            return res.status(401).json({ message: 'O colaborador não existe' });
        }
        const cliente = await services_3.clienteService.findById(Number(clienteId));
        if (Object.keys(cliente || {}).length === 0) {
            return res.status(401).json({ message: 'O cliente não existe' });
        }
        next();
    }
}
exports.default = OrdensValidations;
//# sourceMappingURL=ordens.middleware.js.map