const express = require('express');
const router = express.Router();
const CuentasServicio = require("../servicios/cuentas");

router.get('/', function(req, res) {
    res.json(CuentasServicio.index());
});

router.get('/:idcuenta', function(req, res) {
    //Obtener el parametro idcuenta de la URL
    const idcuenta = req.params.idcuenta;
    res.json(CuentasServicio.read(idcuenta));
});

router.post('/', function(req, res) {
    res.json(CuentasServicio.create(req.body));
});

router.post('/:idcuenta', function(req, res) {
    res.send('Editar cuenta.');
});

router.put('/:idcuenta', function(req, res) {
    res.send('Editar cuenta 2.');
});

router.delete('/:idcuenta', function(req, res) {
    res.send('Eliminar cuenta.');
});

module.exports = router;