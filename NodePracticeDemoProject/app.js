/**
 * Module dependencies.
 */

GLOBAL.config = require('./config')();
var config = GLOBAL.config;
var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
/**
 * Configuration Information
 */

// all environments
app.set('views', __dirname + '/templates');
app.set('view engine', 'hjs');
app.set('layout', 'layouts/layout');
app.engine('hjs', require('hogan-express'));

app.use(bodyParser());

app.use(require('less-middleware')({
    src: __dirname + '/public'
}));
app.use(express.static(path.join(__dirname, 'public')));
var printServerStat = function (mode, port) {
    console.log('Server Started');
    console.log('Mode: ' + mode);
    console.log('Port: ' + port);
};
http.createServer(app).listen(config.port, function () {
    printServerStat(config.mode, config.port);
});

app.use(app.router);
module.exports.app = app;
routes = require('./routes');
