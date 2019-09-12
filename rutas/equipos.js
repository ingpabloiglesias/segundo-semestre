const express = require('express');
const router = express.Router();
const EquiposServicio = require("../servicios/equipos");

router.get('/', function(req, res) {
    res.json(EquiposServicio.index());
});

router.get('/:idequipo', function(req, res) {
    //Obtener el parametro idequipo de la URL
    const idequipo = req.params.idequipo;
    res.json(EquiposServicio.read(idequipo));
});

router.post('/', function(req, res) {
    res.send('Guardar equipo nuevo');
});

router.post('/:idequipo', function(req, res) {
    res.send('Editar equipo.');
});

router.put('/:idequipo', function(req, res) {
    res.send('Editar equipo 2.');
});

router.delete('/:idequipo', function(req, res) {
    res.send('Eliminar equipo.');
});

module.exports = router;