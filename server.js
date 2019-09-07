const express = require('express');
const app = express();
const path = require("path");

app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { title: 'Hola a todos', message: 'Dogs rock!' });
});

//Rutas API
const api = require('./rutas/api.js');
app.use('/v1', api);



app.listen(3000);