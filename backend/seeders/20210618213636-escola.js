module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Escolas',
      [
        {
          nome: 'Escola Estadual Antônio Villaça',
          responsavel: 'Maísa Couceiro Serro',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          nome: 'Escola Estadual Dom João de Souza Lima',
          responsavel: 'Cora Dias Pederneiras',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          nome: 'Escola Estadual Aureo Nonato',
          responsavel: 'Alessandro Goulart Palhares',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    queryInterface.bulkDelete('Escolas', null, {});
  },
};
