const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Citas = sequelize.define('Citas', {
  id_paciente: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_medico: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'citas',
  timestamps: true,
});

module.exports = Citas;
