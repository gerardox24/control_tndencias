var express = require('express');
var router = express.Router();
var dbConfig = require('../db');
var sql = require('mssql');

router.get('/', (req, res) => {
    console.log('entro ordenes');
    var query = 'SELECT * FROM ordenes';
    var executeQuery = (res, query) => {
        sql.connect(dbConfig, function(err) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                var request = new sql.Request();
                request.query(query, function(err, results) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        // res.send(results);
                        console.log(results);
                        res.render('ordenes', {
                            title: 'Kimberly Clark',
                            ordenes: results.recordset
                        });
                    }
                });
            }
        });
    };
    executeQuery(res, query);
});

module.exports = router;