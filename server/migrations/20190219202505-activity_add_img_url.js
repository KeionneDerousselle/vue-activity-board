'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Activities',
      'imageUrl',
      Sequelize.STRING(500)
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Activities', 'imageUrl')
  }
}
