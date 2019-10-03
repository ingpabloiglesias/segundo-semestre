const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const estado = {
    db: null,
    url: 'mongodb://localhost:27017'
}

exports.ObjectID = ObjectID;

exports.connect = function(respuesta) {
    if (estado.db) return respuesta()
    
    MongoClient.connect(estado.url, function(err, db) {
        if (err) 
            return respuesta(err)
        estado.db = db.db("cuentasapi");
        respuesta()
    });
}

exports.get = function() {
    return estado.db
}

exports.close = function(done) {
    if (estado.db) {
        estado.db.close(function(err, result) {
            estado.db = null
            estado.mode = null
            done(err)
        })
    }
}
