var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var setHeader = function (req, res, next) {
    res.append("Access-Control-Allow-Origin" , "*");
    res.append("Access-Control-Allow-Headers","Content-Type")
    res.append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
  };
var indexRouter = require('./routes/index');

var app = express();
app.use(setHeader);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

module.exports = app;
