const express = require('express');
const router = express.Router();
const HistorialClinico = require('../models/historial_clinico');

// Obtener el historial clínico de todos los pacientes
router.get('/', async (req, res) => {
    try {
        const historiales = await HistorialClinico.findAll();
        res.json(historiales);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener historiales clínicos' });
    }
});

// Crear un nuevo historial clínico
router.post('/', async (req, res) => {
    try {
        const nuevoHistorial = await HistorialClinico.create(req.body);
        res.status(201).json(nuevoHistorial);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear historial clínico' });
    }
});

module.exports = router;
