const express = require('express');
const rotas = express.Router();

rotas.get('/listaprodutos', (req, res) => {
  res.render('../views/listar-produtos', {produtos});
});

rotas.get('/novo', (req, res) => {
  res.render('../views/cadastrar-produto')
});

rotas.post('/produto', (req, res) => {
  const produto = addProduto({
    descricao: req.body.descricao,
    preco: req.body.preco
  })
  res.redirect('/produto/listaprodutos');
});

module.exports = rotas;

const novoId = {
  _id: 6,
  get id(){return this._id++}
}

function addProduto(produto){
  if (!produto.id) produto.codigo = novoId.id
  produtos.push(produto);
  return produto  
}

const produtos = [
  { codigo: 1, desc: 'Processador', preco: 120 },
  { codigo: 2, desc: 'Hard Disk',   preco: 50  },
  { codigo: 3, desc: 'Memória RAM', preco: 100 },
  { codigo: 4, desc: 'Pen Drive',   preco: 23  },
  { codigo: 5, desc: 'Impressora',  preco: 450 }
];



