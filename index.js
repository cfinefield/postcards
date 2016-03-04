/* node modules */
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var expresshbs = require('express-handlebars');

app.engine ('handlebars', expresshbs({defaultLayout:'main'}));
app.set ('view engine','handlebars');


app.use(bodyParser.urlencoded());

var cards = [];

app.get('/', function (req, res) {
  res.render('home', {cards: cards});
});

app.get('/add', function (req, res) {
  res.render('add');
});

app.get('/cards', function (req, res) {
  res.send(cards);
});

app.post('/add', function (req, res) {
  cards.push(req.body);
});

app.listen(1337, function() {
  console.log('Postcards app listening on port 1337!');
});