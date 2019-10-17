const Conexion = require("../servicios/conexion");

const CuentaModel = {
    coleccion: "cuentas",

    crear: function(data) {
        return Conexion.get().collection(this.coleccion).insertOne(data);
    },

    leer: function() {
        return Conexion.get().collection(this.coleccion).find().toArray();
    },

    leerPorId: function(id) {
        return Conexion.get().collection(this.coleccion).findOne({'_id' : Conexion.ObjectID(id)});
    },

    actualizar: function(id, data) {
        return Conexion.get().collection(this.coleccion).updateOne({'_id' : Conexion.ObjectID(id)}, {$set: data});
    },

    eliminar: function(id) {
        return Conexion.get().collection(this.coleccion).deleteOne({'_id' : Conexion.ObjectID(id)});
    }
};

module.exports = CuentaModel;