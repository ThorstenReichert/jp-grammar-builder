'use strict'

const cluster = require('cluster');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// config
const port = process.env.NODE_PORT || 3000;

// setup logging
app.use(morgan('dev'));

// setup client
app.use('/client', express.static(
    path.join(__dirname, '/../client')
));

// setup api
app.use('/api', require('./api'));

// disconnect worker on uncaught exception
process.on('uncaughtException', function (err) {
    console.error(err);
    require('forky').disconnect();
});

// start server
app.listen(port, function () {
    console.log('started cluster worker ' + cluster.worker.id + ' on port ' + port);
});