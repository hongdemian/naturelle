const express = require('express');
const app = express();
const helmet = require('helmet');
// const pug = require('pug');
const path = require('path');

app.use (helmet.noCache());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/public/js')));

app.get('/',(req, res)=> {
	res.render('home.pug', {title: 'Naturelle Therapies'});
});

app.get('/about', (req, res) => {
	res.render('about.pug');
});

app.get('/contact', (req, res) => {
	res.render('contact.pug');
});

app.get('*', (req, res) => {
	res.render('404', {title: "Not Found!"});
});
app.listen(3000);
