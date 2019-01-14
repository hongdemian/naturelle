const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req, res)=> {
	res.send(`<h1>Naturelle Therapies</h1>`);
});

app.listen(3000, '127.0.0.1');