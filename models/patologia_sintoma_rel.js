/* eslint-disable no-undef */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PatologiaSintomaRel = sequelize.define(
  "PatologiaSintomaRel",
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
    id_sintoma: {
      type: DataTypes.BIGINT,
      references: { model: "sintomas", key: "id" },
    },
  },
  {
    tableName: "patologia_sintoma_rel",
    timestamps: true,
  }
);

module.exports = PatologiaSintomaRel;
