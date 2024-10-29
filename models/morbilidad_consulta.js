/* eslint-disable no-undef */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MorbilidadConsulta = sequelize.define(
  "MorbilidadConsulta",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_consulta: {
      type: DataTypes.BIGINT,
      references: { model: "consulta", key: "id" },
    },
    id_patologia: {
      type: DataTypes.BIGINT,
      references: { model: "patologia", key: "id" },
    },
  },
  {
    tableName: "morbilidad_consulta",
    timestamps: true,
  }
);

module.exports = MorbilidadConsulta;
