"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const cliente_model_1 = require("./cliente.model");
const colaborador_model_1 = require("./colaborador.model");
class Ordens extends sequelize_1.Model {
}
Ordens.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    dataAbertura: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
        field: 'data_abertura'
    },
    problemaRelatado: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
        field: 'problema_relatado'
    },
    // Fazer a associação com os outros models
    colaboradorId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'colaborador_id',
        references: {
            model: 'colaboradores',
            key: 'id',
        },
    },
    clienteId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'cliente_id',
        references: {
            model: 'clientes',
            key: 'id',
        },
    }
}, {
    sequelize: _1.default,
    tableName: 'os',
    // Removes createdAt and updatedAt timestamps to the model
    timestamps: false,
    // Converts all camelCased columns to snake_case
    underscored: true,
});
Ordens.belongsTo(cliente_model_1.default, { foreignKey: 'cliente_id', as: 'clienteInfo' });
Ordens.belongsTo(colaborador_model_1.default, { foreignKey: 'colaborador_id', as: 'colaboradorInfo' });
exports.default = Ordens;
//# sourceMappingURL=ordens.model.js.map