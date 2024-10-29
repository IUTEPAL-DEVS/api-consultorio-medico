/* eslint-disable no-undef */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const EspecialidadMedica = require("./especialidad_medica");

const Medico = sequelize.define(
  "Medico",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
    especialidad: {
      type: DataTypes.BIGINT,
      references: {
        model: EspecialidadMedica,
        key: "id",
      },
    },
    telefono: DataTypes.TEXT,
    email: DataTypes.TEXT,
  },
  { tableName: "medico", timestamps: true }
);

module.exports = Medico;
