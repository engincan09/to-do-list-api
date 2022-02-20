'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      userId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
              model: 'Users',
              key: 'id',
              as: 'userId'
          },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Jobs")
  }
};


//sequelize db:migrate
//sequelize db:migrate:undo:all 
