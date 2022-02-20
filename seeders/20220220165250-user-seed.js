'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName : 'Engin',
      lastName : 'Can',     
      fullName:'Engin Can',
      createdAt : new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      firstName :'Engin'
    }])
  }
};
