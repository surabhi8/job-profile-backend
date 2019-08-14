'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Companies', [{
     name: 'ABC',
     logo:'logo.svg',
     address: 'Abc Street',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
    name: 'XYZ',
    logo:'logo.svg',
    address: 'Xyz Street',
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, ) => {
    
      return queryInterface.bulkDelete('Companies', null, {});
  }
};
