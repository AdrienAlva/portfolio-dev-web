const express = require('express');
const router = require('./routes/index');

const path = require('path');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());

app.use(express.static('public'));
app.use('/', router);
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !!!');
});

//Data parsing




module.exports = app;

