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
	res.render('home.pug', {title: 'Naturelle Therapies', path: '/' });
});

app.get('/about', (req, res) => {
	res.render('about.pug', {path: '/about', title: 'About Me' });
});

app.get('/contact', (req, res) => {
	res.render('contact.pug', { path: '/contact', title: 'Contact Me' });
});

app.get('/rates', (req, res, next) => {
	res.render('rates', { path: '/rates', title: 'Rates' });
});

app.get('/testimonials', (req, res, next) => {
	res.render('testimonials', { path: '/testimonials', title: 'Testimonials' });
});

app.get('*', (req, res) => {
	res.status(404) .render('404', {title: "Not Found!"});
});
app.listen(3000);
