const Cuenta = require("../modelos/cuenta");
const CuentasServicio = {

    index: function() {
        return Cuenta.leer();
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
    }
}

module.exports = CuentasServicio;