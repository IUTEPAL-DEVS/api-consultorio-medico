/* eslint-disable no-undef */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Patologia = sequelize.define(
  "Patologia",
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "patologia",
    timestamps: true,
  }
);

module.exports = Patologia;
