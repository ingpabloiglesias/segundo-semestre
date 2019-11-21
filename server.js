const express = require('express');
const app = express();
const path = require("path");
const Conexion = require("./servicios/conexion.js");

process.env.master_key = "cualquiercosa";
//Agregamos el body parser para poder obtener los datos de la petición
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { title: 'Hola a todos', message: 'Dogs rock!' });
});

//Imagenes
app.use("/img", express.static("uploads"));   
//Rutas API
const api = require('./rutas/api.js');
app.use('/v1', api);

Conexion.connect( function(err) {
  if (err) {
    console.log(err);
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Conectado. Escuchando en puerto 3000.')
    })
  }
})