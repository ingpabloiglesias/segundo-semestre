const express = require('express');
const router = express.Router();
const CuentasServicio = require("../servicios/cuentas");

const cuentas = require('./cuentas.js');
router.use('/cuentas', cuentas);

router.post("/inicio", (req, res, next) => {
    CuentasServicio.login(req.body.usuario, req.body.password).then(function(sesion){
        res.json(
            {
                "mensaje" : "Inicio de sesion correcto", 
                "token": sesion.ops[0].auth_token
            }
            );
            next();
        }).catch((err) => {
            console.log(err);
            next();
        })
    });
    
    
    module.exports = router;
