const express = require('express');
const router = express.Router();
const CuentasServicio = require("../servicios/cuentas");

router.get('/', function(req, res, next) {
    CuentasServicio.index().then(function(cuentas){
        console.log(cuentas);
        res.json(cuentas);
        next();
    }).catch((err) => {
        console.log(err);
        next();
    })
});

router.get('/:idcuenta', function(req, res, next) {
    CuentasServicio.read(req.params.idcuenta).then(function(cuenta){
        console.log(cuenta);
        res.json(cuenta);
        next();
    }).catch((err) => {
        console.log(err);
        next();
    })
});

router.post('/', function(req, res, next) {
    CuentasServicio.create(req.body).then((resultado) => {
        res.json(resultado.ops[0]);
        next();
    })
});

//Arreglar
router.post('/:idcuenta', function(req, res, next) {
    CuentasServicio.update(req.params.idcuenta, req.body).then(function(cuenta){
        console.log(cuenta);
        res.json(cuenta);
        next();
    }).catch((err) => {
        console.log(err);
        next();
    })
});

router.delete('/:idcuenta', function(req, res, next) {
    CuentasServicio.delete(req.params.idcuenta).then(function(){    
        res.json({exito: true});
        next();
    }).catch((err) => {
        console.log(err);
        next();
    })
});

module.exports = router;