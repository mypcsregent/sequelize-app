'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return queryInterface.bulkInsert('comments',[{
      title: 'A good Post',
      body:'Loved it',
      username:'randall',
      postId:4
    },
  {
    title: 'A average Post',
      body:'Couldve been better',
      username:'randy',
      postId:6
  }],{});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('comments',[{
      title:'A good Post'
    },
    {
      title:'A average Post'
    }],{});
  }
};
