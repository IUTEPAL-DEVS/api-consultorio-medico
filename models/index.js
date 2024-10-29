/* eslint-disable no-undef */
const Sequelize = require("sequelize");
const sequelize = require("../config/database");

// Importar modelos
const Paciente = require("./paciente"); // archivo: paciente.js
const Medico = require("./medico"); // archivo: medico.js
const EspecialidadMedica = require("./especialidad_medica"); // archivo: especialidad.js
const Sintomas = require("./sintomas"); // archivo: sintoma.js
const Patologia = require("./patologias"); // archivo: patologia.js
const Citas = require("./citas"); // archivo: cita.js
const HistorialClinico = require("./historial_clinico"); // archivo: historial_clinico.js
const Usuarios = require("./usuarios"); // archivo: usuario.js
const Roles = require("./roles"); // archivo: rol.js
const TipoPaciente = require("./tipo_paciente"); // archivo: tipo_paciente.js
const TipoPatologia = require("./tipo_patologia"); // archivo: tipo_patologia.js
const PatologiaSintomaRel = require("./patologia_sintoma_rel"); // archivo: patologia_sintoma_rel.js
const MorbilidadConsulta = require("./morbilidad_consulta"); // archivo: morbilidad_consulta.js
const SintomaConsulta = require("./sintoma_consulta"); // archivo: sintoma_consulta.js

// Asociaciones
// Relaciones de Paciente
Paciente.hasMany(Citas, { foreignKey: "id_paciente" });
Paciente.hasMany(HistorialClinico, { foreignKey: "id_paciente" });
Paciente.belongsTo(TipoPaciente, { foreignKey: "tipo" });

// Relaciones de Medico
Medico.hasMany(Citas, { foreignKey: "id_medico" });
Medico.hasMany(HistorialClinico, { foreignKey: "id_medico" });

// Relaciones de Rol y Usuario
Roles.hasMany(Usuarios, { foreignKey: "id_rol" });
Usuarios.belongsTo(Roles, { foreignKey: "id_rol" });

// Relaciones de Patología y Síntomas
Patologia.belongsToMany(Sintomas, {
  through: PatologiaSintomaRel,
  foreignKey: "id_patologia",
});
Sintomas.belongsToMany(Patologia, {
  through: PatologiaSintomaRel,
  foreignKey: "id_sintoma",
});

// Relaciones de Citas
Citas.belongsTo(Paciente, { foreignKey: "id_paciente" });
Citas.belongsTo(Medico, { foreignKey: "id_medico" });
Citas.hasMany(MorbilidadConsulta, { foreignKey: "id_consulta" });
Citas.hasMany(SintomaConsulta, { foreignKey: "id_consulta" });

// Relaciones de Patología y Tipo de Patología
Patologia.belongsToMany(TipoPatologia, {
  through: "tipo_patologia",
  foreignKey: "id_patologia",
});
TipoPatologia.belongsToMany(Patologia, {
  through: "tipo_patologia",
  foreignKey: "id_tipo",
});

// Exportar todos los modelos
module.exports = {
  Paciente,
  Medico,
  EspecialidadMedica,
  Sintomas,
  Patologia,
  Citas,
  HistorialClinico,
  Usuarios,
  Roles,
  TipoPaciente,
  TipoPatologia,
  PatologiaSintomaRel,
  MorbilidadConsulta,
  SintomaConsulta,
  sequelize, // Para poder sincronizar la base de datos
};
