const express = require('express');
const router = express.Router();
const { Sintomas } = require('../models/sintomas');

// Obtener todos los síntomas
router.get('/', async (req, res) => {
  try {
    const sintomas = await Sintomas.findAll();
    res.json(sintomas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener síntomas' });
  }
});

// Crear un nuevo síntoma
router.post('/', async (req, res) => {
  try {
    const nuevoSintoma = await Sintomas.create(req.body);
    res.json(nuevoSintoma);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear síntoma' });
  }
});

module.exports = router;
