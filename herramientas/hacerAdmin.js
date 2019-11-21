const Conexion = require("../servicios/conexion");

const myArgs = process.argv.slice(2);

Conexion.connect( function(err) {
    if (err) {
      console.log(err);
      console.log('Unable to connect to Mongo.')
      process.exit(1)
    } else {
        Conexion.get().collection("cuentas").updateOne(
            {'_id' : Conexion.ObjectID(myArgs[0])}
            , {$set: {isAdmin: true}}).then(function(){
                console.log("Hecho");
            }).catch(function() {
                console.log("Hubo un error");
            }).finally(function(){
                Conexion.close();
            });
    }
  })
