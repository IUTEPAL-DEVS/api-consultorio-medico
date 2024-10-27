const express = require('express');
const { Medico } = require('../models/medico');
const router = express.Router();

// Obtener todos los médicos
router.get('/', async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener médicos' });
  }
});

// Crear un nuevo médico
router.post('/', async (req, res) => {
  try {
    const medico = await Medico.create(req.body);
    res.json(medico);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear médico' });
  }
});

module.exports = router;
