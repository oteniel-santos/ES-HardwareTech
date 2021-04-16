const { static } = require('express');
const express = require('express');
const app = express();

app.get('/', viewIndex); 
app.use(express.static('public'));
app.set('view engine', 'ejs');

function viewIndex(req, res) {
  res.render('index');
};

app.listen(3000);