'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

//pug config
app.set('view engine', 'pug');

//middlewares
app.use(express.static('public'));

app.get('/', (req, res, next) => {
	res.render('index');
})













const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
