const express = require('express');
const app = express();
const helmet = require('helmet');
const pug = require('pug');
const path = require('path');

app.use (helmet());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, './public')));

app.get('/',(req, res)=> {
	res.render('home.pug' );
});

app.listen(3000, '127.0.0.1');