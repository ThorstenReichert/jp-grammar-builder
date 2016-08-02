'use strict'

const cluster = require('cluster');
const express = require('express');
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

// setup logging
morgan.token('id', function getId(req) {
    return id;
});
app.use(morgan(':id | :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));

// setup client
app.use('/client', express.static(
    path.join(__dirname, '/../client')
));

// setup api
app.use('/api', require('./api')(wagner));

// disconnect worker on uncaught exception
// prompts forky to restart worker
process.on('uncaughtException', function (err) {
    console.error(err);
    require('forky').disconnect();
});

// start server
app.listen(port, function () {
    console.log('cluster worker ' + id + ' listening on port ' + port);
});