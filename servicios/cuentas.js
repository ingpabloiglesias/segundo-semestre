const Conexion = require("./conexion");

const CuentasServicio = {

    coleccion: "cuentas",

    index: function() {
        return this.data;
    },

    read: function(idcuenta) {
        let cuenta = null;
        this.data.forEach(function(obj) {
            if (idcuenta === obj._id)
                cuenta = obj;
        });
        return cuenta;
    },

    create: function(data) {
        data.creado = true;
        Conexion.insertar(this.coleccion, data);
        return data;
    }
}

module.exports = CuentasServicio;