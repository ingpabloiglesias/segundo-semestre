const jwt = require('jsonwebtoken');
const CuentasServicio = require("./cuentas");

const adminAuth = (req, res, next) => {
    const token = req.headers['access-token'];
    
    if (token) {
        jwt.verify(token, process.env.master_key, (err, decoded) => {      
            if (err) {
                return res.json({ mensaje: 'Token inválida' , error: err});    
            } else {
                CuentasServicio.getSession(token).then(function(usuario) {
                    if (usuario.isAdmin) {
                        req.decoded = decoded;
                        req.user = usuario;
                        next();
                    } else {
                        res.send({ 
                            mensaje: 'No puede acceder a estas funciones.' 
                        }); 
                    }
                }).catch(function(err){
                    res.send({ 
                        mensaje: 'Usuario no encontrado.' 
                    }); 
                });
            }
        });
    } else {
        res.send({ 
            mensaje: 'Token no presente.' 
        });
    }
};

module.exports = {
    adminAuth: adminAuth
}