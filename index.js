const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Kimberly Clark'
	});
});

const server = app.listen(3000, () => {
	console.log('running on 3000');
});