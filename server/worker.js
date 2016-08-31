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
const port = process.env.NODE_PORT || 3000;
const id = cluster.worker.id;

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

// setup logging
const logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            name: 'console',
            level: 'debug',
            formatter: function (options) {
                return id + ' | ' + options.level + ': ' +
                    (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        }),
        new (winston.transports.File)({
            name: 'file',
            level: 'warn',
            filename: path.join(__dirname, '/log/all-logs.log'),
            timestamp: true
        })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({
            humanReadableUnhandledException: true
        }),
        new (winston.transports.File)({
            filename: path.join(__dirname, '/log/exceptions.log')
        })
    ]
});
logger.info('setup logging');

// setup DI
logger.info('setup wagner');
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

// setup favicon
logger.info('setup favicon');
app.use(favicon(
    path.join(__dirname, '../client/flag.ico')
));

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
            filename: path.join(__dirname, '/log/connections.log'),
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
            formatter: function (options) {
                return id + ' | ' + options.level + ': ' +
                    (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
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
app.listen(port, function () {
    logger.info('listening on port ' + port);
});