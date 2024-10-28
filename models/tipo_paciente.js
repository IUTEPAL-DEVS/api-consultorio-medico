const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoPaciente = sequelize.define('TipoPaciente', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'tipo_paciente',
  timestamps: true,
});

module.exports = TipoPaciente;
