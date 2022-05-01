'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('os', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataAbertura: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        field: 'data_abertura'
      },
      clienteId: {
        type: Sequelize.INTEGER,
        field: 'cliente_id'
      },
      problemaRelatado: {
        type: Sequelize.TEXT,
        field: 'problema_relatado'
      },
      colaboradorId: {
        type: Sequelize.INTEGER,
        field: 'colaborador_id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('os');
  }
};