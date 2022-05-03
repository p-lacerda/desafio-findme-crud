"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = ClienteValidations;
//# sourceMappingURL=cliente.middleware.js.map