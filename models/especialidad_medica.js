const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EspecialidadMedica = sequelize.define('EspecialidadMedica', {
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'especialidad_medica',
  timestamps: true,
});

module.exports = EspecialidadMedica;
