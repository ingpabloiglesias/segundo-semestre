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
    }
}

module.exports = CuentasServicio;