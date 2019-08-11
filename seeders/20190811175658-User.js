'use strict';

module.exports = {
  up: (queryInterface) => {
      return queryInterface.bulkInsert('Users', [{
        userName: 'john_doe',
        password: '$2a$10$tA2fKTmQVLw6yuFRZ9Uusu4iI/JN0zhM941qg77ngoZesn9mHa4pq',
        name:'John Doe',
        image:'',
        jobRole:'Software Developer',
        companyId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'steve_martin',
        password: '$2a$10$tA2fKTmQVLw6yuFRZ9Uusu4iI/JN0zhM941qg77ngoZesn9mHa4pq',
        name:'Steve Martin',
        image:'',
        jobRole:'Project Manager',
        companyId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'emily_pearson',
        password: '$2a$10$tA2fKTmQVLw6yuFRZ9Uusu4iI/JN0zhM941qg77ngoZesn9mHa4pq',
        name:'Emily Pearson',
        image:'',
        jobRole:'Staff Coordinator',
        companyId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface) => {
  
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
