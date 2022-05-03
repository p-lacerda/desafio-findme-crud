"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ClienteValidations {
    static async nameValidation(req, res, next) {
        const { nome } = req.body;
        if (nome === null || nome === undefined) {
            return res.status(401).json({ message: 'Os campos devem estar preenchidos' });
        }
        if (nome === "") {
            return res.status(401).json({ message: 'O campo nome está vazio' });
        }
        next();
    }
    static async emailValidation(req, res, next) {
        const { email } = req.body;
        const isValidEmail = (email) => {
            const EMAIL_REGEX = /\S+@\S+\.\S+/;
            return EMAIL_REGEX.test(email);
        };
        if (email === null || email === undefined) {
            return res.status(401).json({ message: 'Os campos devem estar preenchidos' });
        }
        if (email === "") {
            return res.status(401).json({ message: 'O campo email está vazio' });
        }
        if (!isValidEmail(email)) {
            return res.status(401).json({ message: 'O campo email não é válido' });
        }
        next();
    }
    static async senhaValidation(req, res, next) {
        const { senha } = req.body;
        if (senha === null || senha === undefined) {
            return res.status(401).json({ message: 'Os campos devem estar preenchidos' });
        }
        if (senha === "") {
            return res.status(401).json({ message: 'O campo senha está vazio' });
        }
        if (senha.length < 6) {
            return res.status(401).json({ message: 'O campo senha tem menos de 6 caracteres' });
        }
        next();
    }
    static async idValidation(req, res, next) {
        const { id } = req.params;
        if (id === null || id === undefined) {
            return res.status(401).json({ message: 'O parametro id está vazio' });
        }
        next();
    }
    static async idExistsValidation(req, res, next) {
        const { id } = req.params;
        const colaborador = await services_1.colaboradorService.findById(Number(id));
        if (Object.keys(colaborador || {}).length === 0) {
            return res.status(401).json({ message: 'O colaborador não existe' });
        }
        next();
    }
}
exports.default = ClienteValidations;
//# sourceMappingURL=colaborador.middleware.js.map