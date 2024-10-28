const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sintomas = sequelize.define('Sintomas', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'sintomas',
  timestamps: true,
});

module.exports = Sintomas;
