const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Signal extends Model {}

Signal.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  assetType: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  premium: {
    type: DataTypes.BOOLEAN
  },
  entryPoint: {
    type: DataTypes.TEXT
  },
  targetOne: {
    type:DataTypes.TEXT
  },
  targetTwo:{
    type:DataTypes.TEXT
  },
  targetThree: {
    type:DataTypes.TEXT
  },
  targetFour:{
    type:DataTypes.TEXT
  },
  date: {
    type: DataTypes.DATE
  }

}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'signal'
})

module.exports = Signal;