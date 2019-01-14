const express = require('express');
const app = express();

app.use (helmet());
app.use(express.static('public'));
app.engine('pug', require('pug').__express);

app.get('/',(req, res)=> {
	res.render('home.pug' );
});

app.listen(3000, '127.0.0.1');