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

    return queryInterface.bulkInsert('posts',[{
      title: 'Rajesh',
      body:'This is Rajesh. I made a post'

    },
  {
    title:'gokul',
    body:'I am gokul. I also made a post'
  }],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('posts',[{
      title:'rajesh'
    },
    {
      title:'gokul'
    }],{});
  }
};
