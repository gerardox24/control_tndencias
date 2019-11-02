var express = require('express');
var router = express.Router();
var dbConfig = require('../db');
var sql = require('mssql');

router.get('/', (req, res) => {
    res.send({ code: 200 });
});

module.exports = router;