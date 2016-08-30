'use strict'

const cluster = require('cluster');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const wagner = require('wagner-core');

const app = express();

// config
const port = process.env.NODE_PORT || 3000;
const id = cluster.worker.id;

// setup DI
const kana = require('../kana');
wagner.factory('kana', function () {
    return kana;
});

// setup memory leak detection
const memwatch = require('memwatch-next');
const fs = require('fs');

const logfile = path.join(__dirname, '/log/memwatch.log');

memwatch.on('leak', function (info) {
    fs.appendFile(logfile, info, function (err) {
        if (err) {
            throw err;
        }

        console.warn('Memory leak detected. Wrote info to ' + logfile);
    });
});

memwatch.on('stats', function (stats) {
    console.log(stats);
});

// setup helmet
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());

// setup client
app.use('/client', express.static(
    path.join(__dirname, '/../client')
));

// setup logging (ignore client requests)
morgan.token('id', function getId(req) {
    return id;
});
app.use(morgan(':id | :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));

// setup api
app.use('/api', require('./api')(wagner));

// default to /client
app.use('/', function (req, res, err) {
    res.redirect('/client');
});

// disconnect worker on uncaught exception
// prompts forky to restart worker
process.on('uncaughtException', function (err) {
    console.error(err);
    require('forky').disconnect();
});

// start server
app.listen(port, function () {
    console.log(id + ' | listening on port ' + port);
});