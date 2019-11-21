const jwt = require('jsonwebtoken');
const CuentasServicio = require("./cuentas");

const adminAuth = (req, res, next) => {
    const token = req.headers['access-token'];
    
    if (token) {
        jwt.verify(token, process.env.master_key, (err, decoded) => {      
            if (err) {
                return res.json({ mensaje: 'Token inválida' });    
            } else {
                CuentasServicio.getSession(token).then(function(data) {
                    console.log(data);
                    if (data.isAdmin) {
                        req.decoded = decoded;
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
            mensaje: 'Token no proveída.' 
        });
    }
};

module.exports = {
    adminAuth: adminAuth
}