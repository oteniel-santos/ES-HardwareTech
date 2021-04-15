const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/produtos', function(req, res) {
  res.sendFile(__dirname+'/public/produtos.html');
});

app.get('/usuarios', function(req, res) {
  res.sendFile(__dirname+'/public/usuarios.html');
});

app.get('/sobre', function(req, res) {
  res.sendFile(__dirname+'/public/sobre.html')
});

app.listen(3000);