const express = require('express');
const router = express.Router();

const equipos = require('./equipos.js');

router.use('/equipos', equipos);

module.exports = router;


/*
* Todas las rutas que están en el archivos equipos, pegalo después de la ruta
* '/equipos'
* Ej: '/equipos/:idequipo' POST
* 
*/