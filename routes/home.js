var express = require('express');
var router = express.Router();
var dbConn = require('../db');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    dbConn.query('SELECT * FROM usuarios WHERE email=? AND password=?', [username, password], function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        if (results.length > 0) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    });
});

module.exports = router;