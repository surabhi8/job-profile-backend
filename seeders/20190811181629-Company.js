'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Companies', [{
     name: 'ABC',
     logo:'',
     address: 'abc street',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
    name: 'XYZ',
    logo:'',
    address: 'xyz street',
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, ) => {
    
      return queryInterface.bulkDelete('Companies', null, {});
  }
};
