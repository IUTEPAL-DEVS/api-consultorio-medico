/* eslint-disable no-undef */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TipoPatologia = sequelize.define(
  "TipoPatologia",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_patologia: {
      type: DataTypes.BIGINT,
      references: { model: "patologia", key: "id" },
    },
    id_tipo: {
      type: DataTypes.BIGINT,
      references: { model: "tipo_general", key: "id" },
    },
  },
  {
    tableName: "tipo_patologia",
    timestamps: true,
  }
);

module.exports = TipoPatologia;
