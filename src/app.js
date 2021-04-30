const express = require('express');
const app = express();
const path = require('path');
const rotas = require('./rotas')

app.use(express.urlencoded({extended: true}));

const dirPublic = path.join(__dirname, '../public');
app.use(express.static(dirPublic));
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.use(rotas);

app.listen(3000, () => {console.log('Rodando...')});

