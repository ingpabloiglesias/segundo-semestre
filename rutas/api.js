const express = require('express');
const router = express.Router();

const cuentas = require('./cuentas.js');
router.use('/cuentas', cuentas);



module.exports = router;
