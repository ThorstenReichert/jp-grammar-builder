'use strict'

const cluster = require('cluster');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const wagner = require('wagner-core');
const winston = require('winston');

const app = express();

// config
const config = require('./config')({
    rootDir: __dirname
});

// setup memory leak detection
const memwatch = require('memwatch-next');
const fs = require('fs');

const logfile = config.log.files.memwatch;

memwatch.on('leak', function (info) {
    fs.appendFile(logfile, info, function (err) {
        if (err) {
            throw err;
        }

        console.warn('Memory leak detected. Wrote info to ' + logfile);
    });
});

// setup logging
const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            name: 'console',
            level: 'debug',
            label: config.node.id,
            colorize: true
        }),
        new (winston.transports.File)({
            name: 'file',
            level: 'warn',
            filename: config.log.files.all,
            timestamp: true
        })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({
            humanReadableUnhandledException: true
        }),
        new (winston.transports.File)({
            filename: config.log.files.exception
        })
    ]
});

logger.info('setup logging');

// setup DI
logger.info('setup wagner');
wagner.factory('config', function () {
    return config;
});

const kana = require('../kana');
wagner.factory('kana', function () {
    return kana;
});

wagner.factory('logger', function () {
    return logger;
});

// setup helmet
logger.info('setup helmet');
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());

// setup compression
logger.info('setup compression');
app.use(compression());

// setup client
logger.info('setup client');
app.use('/client', express.static(
    path.join(__dirname, '/../client')
));

// setup morgan (ignore client requests)
logger.info('setup morgan');
const connectionCombinedLogger = new winston.Logger({
    transports: [
        new (winston.transports.File)({
            level: 'info',
            filename: config.log.files.connection,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        })
    ]
});

connectionCombinedLogger.stream = {
    write: function (message, encoding) {
        connectionCombinedLogger.info(message);
    }
};

const connectionDevLogger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
            label: config.node.id
        })
    ]
});

connectionDevLogger.stream = {
    write: function (message, encoding) {
        connectionDevLogger.info(message);
    }
};

app.use(morgan('combined', { 'stream': connectionCombinedLogger.stream }));
app.use(morgan('dev', { 'stream': connectionDevLogger.stream }));

// setup api router
logger.info('setup api router');
app.use('/api', require('./api')(wagner));

// default to /client
app.use('/', function (req, res, err) {
    res.redirect('/client');
});

// disconnect worker on uncaught exception
// prompts forky to restart worker
process.on('uncaughtException', function (err) {
    logger.error(err);
    require('forky').disconnect();
});

// start server
app.listen(config.node.port, function () {
    logger.info('listening on port ' + config.node.port);
});