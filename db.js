const mysql = require('mysql');

var dbConn = mysql.createConnection({
	host: '',
	user: 'root',
	password: 'smartkitchen',
	database: 'kimberly_clark'
})