const Cuenta = require("../modelos/cuenta");
const CuentasServicio = {

    index: function() {
        return Cuenta.leer();
    },

    login: function(usuario, password) {
        let userObj = {};
        const buscarUsuario = Cuenta.buscarPorUsuario(usuario, password);
        const validarPassword = buscarUsuario.then(function(data) {
            userObj = data;
            Cuenta.validarPassword(data, password);
        });
        const crearSesion = validarPassword.then(function() {
            return Cuenta.crearSesion(userObj);
        });
        return crearSesion;
    },

    read: function(idcuenta) {
        return Cuenta.leerPorId(idcuenta);
    },

    create: function(data) {
        return Cuenta.crear(data);
    },

    update: function(idcuenta, data) {
        return Cuenta.actualizar(idcuenta, data);
    },

    delete: function(idcuenta) {
        return Cuenta.eliminar(idcuenta);
    },

    getSession: function(token) {
        return Cuenta.buscarSesion(token);
    }
}

module.exports = CuentasServicio;