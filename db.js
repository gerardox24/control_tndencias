const express = require('express');
// const mysql = require('mysql');

// var dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'kimberly_clark',
// });

// dbConn.connect((err) => {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + dbConn.threadId);

// });

// const sql = require('mssql');

var dbConfig = {
    user: 'susana',
    password: 'TesisMarzo2019',
    server: 'tendenciasnuevo.database.windows.net',
    database: 'tendencias',
    encrypt: true
};

module.exports = dbConfig;