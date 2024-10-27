const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');
const Medico = require('./medico');

const Consulta = sequelize.define('Consulta', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  cedula_paciente: {
    type: DataTypes.TEXT,
    references: {
      model: Paciente,
      key: 'cedula',
    },
  },
  id_medico: {
    type: DataTypes.BIGINT,
    references: {
      model: Medico,
      key: 'id',
    },
  },
  fecha: DataTypes.DATE,
  observaciones: DataTypes.TEXT,
}, { tableName: 'consulta', 
     timestamps:true,
});

module.exports = Consulta;
