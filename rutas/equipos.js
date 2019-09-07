const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Ruta principal equipos');
});

router.get('/:idequipo', function(req, res) {
    res.send('Ruta get equipo particular');
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