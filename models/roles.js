const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Roles = sequelize.define('roles', {
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'roles',
  timestamps: true,
});

module.exports = Roles;
