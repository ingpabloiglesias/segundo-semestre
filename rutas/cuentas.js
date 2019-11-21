const express = require('express');
const router = express.Router();
const CuentasServicio = require("../servicios/cuentas");
const AuthServicio = require("../servicios/auth");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/cuentas')
    },
    filename: function (req, file, cb) {
        let extension = "";
        switch (file.mimetype) {
            case "image/jpeg":
                extension = ".jpeg";
                break;
            case "image/png":
                extension = ".png";
                break;
            default:
                extension = "";
        }
        cb(null, Math.ceil(Math.random() * 100000) + "-" + Date.now() + extension)
    }
  })
  
const upload = multer({ storage: storage });

router.get('/', AuthServicio.adminAuth, function(req, res, next) {
    CuentasServicio.index().then(function(cuentas){
        res.json(cuentas);
        next();
    }).catch((err) => {
        console.log(err);
        next();
    })
});

router.get('/:idcuenta', function(req, res, next) {
    CuentasServicio.read(req.params.idcuenta).then(function(cuenta){
        res.json(cuenta);
        next();
    }).catch((err) => {
        console.log(err);
        next();
    })
});
//Crear una cuenta
router.post('/', upload.single("imagen"), function(req, res, next) {
    console.log(req.file);
    if (req.file && req.file.filename)
        req.body.imagen = "http://localhost:3000/img/cuentas/" + req.file.filename
    CuentasServicio.create(req.body).then((resultado) => {
        res.json(resultado.ops[0]);
        next();
    })
});

router.post('/:idcuenta', upload.single("imagen"), function(req, res, next) {
    if (req.file && req.file.filename)
        req.body.imagen = "http://localhost:3000/img/cuentas/" + req.file.filename
    CuentasServicio.update(req.params.idcuenta, req.body).then(function(){
        res.json({exito: true});
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