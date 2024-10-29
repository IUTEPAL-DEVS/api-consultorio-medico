/* eslint-disable no-undef */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const HistorialClinico = sequelize.define(
  "HistorialClinico",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_paciente: {
      type: DataTypes.TEXT,
      references: { model: "paciente", key: "cedula" },
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    id_consulta: {
      type: DataTypes.BIGINT,
      references: { model: "consulta", key: "id" },
    },
  },
  {
    tableName: "historial_clinico",
    timestamps: true,
  }
);

module.exports = HistorialClinico;
