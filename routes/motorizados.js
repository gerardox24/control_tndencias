var express = require('express');
var router = express.Router();
var dbConfig = require('../db');
var sql = require('mssql');

router.get('/', (req, res) => {

    var query = 'SELECT * FROM motorizados';
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
                        res.send(results);
                        console.log(results);
                        res.render('motorizados', {
                            title: 'Kimberly Clark',
                            // people: results
                        });
                    }
                });
            }
        });
    }

    console.log('hey');
    // dbConn.query('SELECT * FROM motorizados', (error, results, fields) => {
    //     if (error) throw error;
    //     res.render('index', {
    //         title: 'Kimberly Clark',
    //         people: results
    //     });
    // });
    executeQuery(res, query);
});

module.exports = router;