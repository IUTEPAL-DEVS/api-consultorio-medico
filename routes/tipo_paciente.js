const express = require('express');
const router = express.Router();
const TipoPaciente = require('../models/tipo_paciente');

// Obtener todos los tipos de paciente
router.get('/', async (req, res) => {
    try {
        const tiposPaciente = await TipoPaciente.findAll();
        res.json(tiposPaciente);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tipos de paciente' });
    }
});

// Crear un nuevo tipo de paciente
router.post('/', async (req, res) => {
    try {
        const nuevoTipoPaciente = await TipoPaciente.create(req.body);
        res.status(201).json(nuevoTipoPaciente);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear tipo de paciente' });
    }
});

module.exports = router;
