const express = require('express');
const rotas = express.Router();
const rotasProdutos = require('./produtos/rotas-produto')

rotas.get('/', viewIndex);
rotas.use('/produto', rotasProdutos); 

function viewIndex(req, res) {
  res.render('./views/index');
};

rotas.get('/usuarios', (req, res) => {
  res.render('./views/usuarios');
});


module.exports = rotas;