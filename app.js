const { static } = require('express');
const express = require('express');
const app = express();

app.get('/', viewIndex); 
app.use(express.static('public'));
app.set('view engine', 'ejs');

function viewIndex(req, res) {
  res.render('index');
};

app.get('/produtos', (req, res) => {
  res.render('produtos', {produtos});
});

app.get('/usuarios', (req, res) => {
  res.render('usuarios');
});

app.listen(3000, () => {console.log('Rodando...')});

const produtos = [
  { codigo: 1, desc: 'Processador', preco: 120 },
  { codigo: 2, desc: 'Hard Disk',   preco: 50  },
  { codigo: 3, desc: 'Memória RAM', preco: 100 },
  { codigo: 4, desc: 'Pen Drive',   preco: 23  },
  { codigo: 5, desc: 'Impressora',  preco: 450 }
];