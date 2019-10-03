const express = require('express');
const app = express();
const path = require("path");
const Conexion = require("./servicios/conexion.js");

//Agregamos el body parser para poder obtener los datos de la petición
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { title: 'Hola a todos', message: 'Dogs rock!' });
});

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