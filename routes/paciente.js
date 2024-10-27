const express = require('express');
const { Paciente } = require('../models/paciente');
const router = express.Router();

// Obtener todos los pacientes
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pacientes' });
  }
});

// Crear un nuevo paciente
router.post('/', async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente); // Asegúrate de enviar el código 201 para creación exitosa
  } catch (error) {
    console.error(error); // Imprimir el error completo en la consola
    res.status(500).json({ error: 'Error al crear paciente', details: error.message }); // Puedes incluir detalles del error
  }
});


module.exports = router;
