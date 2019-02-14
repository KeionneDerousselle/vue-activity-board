'use strict'
module.exports = (sequelize, DataTypes) => {
  const Activities = sequelize.define(
    'Activities',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      archivedUntil: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {}
  )
  Activities.associate = function(models) {
    // associations can be defined here
  }
  return Activities
}
