var express = require('express');
var router = express.Router();
var dbConn = require('../db');
var globals = require('../globals');

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

router.post('/post_login', (req, res) => {
    // console.log(req.body);
    globals.accessToken;
    globals.accessToken = req.body.accessToken;
    if (globals.accessToken) {
        res.send({ code: 200 });
    } else {
        res.send({ code: 304 });
    }
})

module.exports = router;