const Conexion = require("../servicios/conexion");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CuentaModel = {
    coleccion: "cuentas",

    crear: function(data) {
        const hash = bcrypt.hashSync(data.password, 10);
        data.password = hash;
        return Conexion.get().collection(this.coleccion).insertOne(data);
    },

    leer: function() {
        return Conexion.get().collection(this.coleccion).find().toArray();
    },

    leerPorId: function(id) {
        return Conexion.get().collection(this.coleccion).findOne({'_id' : Conexion.ObjectID(id)});
    },

    buscarPorUsuario: function(usuario) {
        return Conexion.get().collection(this.coleccion).findOne({'username': usuario});
    },

    actualizar: function(id, data) {
        return Conexion.get().collection(this.coleccion).updateOne({'_id' : Conexion.ObjectID(id)}, {$set: data});
    },

    eliminar: function(id) {
        return Conexion.get().collection(this.coleccion).deleteOne({'_id' : Conexion.ObjectID(id)});
    },

    validarPassword: function(usuario, password) {
        return bcrypt.compare(password, usuario.password);
    },

    crearSesion: function(usuario) {
        const payload = {
            check:  true,
            user_id: usuario._id,
            admin: usuario.isAdmin
		};
        const token = jwt.sign(payload, process.env.master_key, {
			expiresIn: 3600
        });
        return Conexion.get().collection("sesiones").insertOne({usuario_id: usuario._id, auth_token: token});
    },

    buscarSesion: function(token) {
        const sesion = Conexion.get().collection("sesiones").findOne({'auth_token' : token});
        return sesion.then(function(data) {
            return CuentaModel.leerPorId(data.usuario_id);
        });
    }
};

module.exports = CuentaModel;