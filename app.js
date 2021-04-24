const { static } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));


app.get('/', viewIndex); 

const dirPublic = path.join(__dirname, '/public');
app.use(express.static(dirPublic));
app.set('view engine', 'ejs');

function viewIndex(req, res) {
  res.render('index');
};

app.get('/listaprodutos', (req, res) => {
  res.render('listar-produtos', {produtos});
});

app.get('/usuarios', (req, res) => {
  res.render('usuarios');
});

app.get('/produto/novo', (req, res) => {
  res.render('cadastrar-produto')
});

app.post('/produto', (req, res) => {
  const produto = addProduto({
    descricao: req.body.descricao,
    preco: req.body.preco
  })
  res.redirect('/listaprodutos');
});

app.listen(3000, () => {console.log('Rodando...')});

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