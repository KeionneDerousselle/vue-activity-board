'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const commands = [
      queryInterface.removeColumn('Activities', 'imageUrl'),
      queryInterface.addColumn(
        'Activities',
        'cloudinaryPublicId',
        Sequelize.STRING
      )
    ]

    return Promise.all(commands)
  },

  down: (queryInterface, Sequelize) => {
    const commands = [
      queryInterface.addColumn('Activities', 'imageUrl', Sequelize.STRING(500)),
      queryInterface.removeColumn('Activities', 'cloudinaryPublicId')
    ]

    return Promise.all(commands)
  }
}
