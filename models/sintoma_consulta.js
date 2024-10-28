const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SintomaConsulta = sequelize.define('SintomaConsulta', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  id_consulta: {
    type: DataTypes.BIGINT,
    references: { model: 'consulta', key: 'id' },
  },
  id_sintoma: {
    type: DataTypes.BIGINT,
    references: { model: 'sintomas', key: 'id' },
  },
}, {
  tableName: 'sintoma_consulta',
  timestamps: true,
});

module.exports = SintomaConsulta;
