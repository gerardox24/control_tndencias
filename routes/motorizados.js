var express = require('express');
var router = express.Router();
var dbConn = require('../db');

router.get('/', (req, res) => {
    dbConn.query('SELECT * FROM motorizados', (error, results, fields) => {
        if (error) throw error;
        res.render('index', {
            title: 'Kimberly Clark',
            people: results
        });
    });
});

module.exports = router;