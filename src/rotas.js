const express = require('express');
const rotas = express.Router();
const rotasProdutos = require('./produtos/rotas-produto')


rotas.get('/', (req, res) => {
  res.render('./views/index');
});

rotas.use('/produtos', rotasProdutos); 

// rotas.get('/usuarios', (req, res) => {
//   res.render('./views/usuarios');
// });


module.exports = rotas;