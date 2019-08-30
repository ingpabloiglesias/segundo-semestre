const express = require('express');
const app = express();
const path = require("path");

app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

app.get('/', function (peticion, respuesta) {
  respuesta.send('Hola asdasdsad!')
});

app.get('/otra', function (req, res) {
    res.send('Otra!')
});

app.get('/otro', function (req, res) {
    res.send('Otro!')
});

app.post('/otro', function (req, res) {
    res.send('Otro!')
});

app.post('/otro/:otro', function (req, res) {
    res.send('Otro!')
});

app.get('/ejemplo', function(req, res) {
    res.render('ejemplo', { title: 'Hola Gabi', message: 'Dogs rock!' });
  });

app.listen(3000);