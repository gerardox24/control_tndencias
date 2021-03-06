const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const logger = require('morgan');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const dbConn = require('./db');

var loginRoute = require('./routes/login');
var dashboardRoute = require('./routes/dashboard');
var ordenesRoute = require('./routes/ordenes');
var motorizadosRoute = require('./routes/motorizados');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', loginRoute);
app.use('/dashboard', dashboardRoute);
app.use('/ordenes', ordenesRoute);
app.use('/motorizados', motorizadosRoute);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;