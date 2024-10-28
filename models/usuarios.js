const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Roles = require('./roles');

const Usuarios = sequelize.define('Usuarios', {
  nombre_usuario: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_rol: {
    type: DataTypes.BIGINT,
    references: {
      model: Roles,
      key: 'id',
    },
  },
}, {
  tableName: 'usuarios',
  timestamps: true,
});

Usuarios.belongsTo(Roles, { foreignKey: 'id_rol' });

module.exports = Usuarios;
