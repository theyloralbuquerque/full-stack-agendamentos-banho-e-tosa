/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_pet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_pet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raca_pet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tutores',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('pets');
  },
};
