const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Scalpsignal extends Model {}

Scalpsignal.init({
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
  stopLoss: {
    type:DataTypes.TEXT
  },
 
  takeProfit: {
    type:DataTypes.TEXT
  },
  
  date: {
    type: DataTypes.DATE
  }

}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'scalpsignal'
})

module.exports = Scalpsignal;