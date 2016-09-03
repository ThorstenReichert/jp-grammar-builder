'use strict';

const cluster = require('cluster');
const env = require('./env');
const path = require('path');

module.exports = function (params) {

    // node config
    const node = {
        port: process.env.NODE_PORT || 3000
    };

    if (cluster.isWorker) {
        node.id = cluster.worker.id;
    } else {
        node.id = null;
    }

    // log config 
    const log = {
        files: {
            all: path.join(params.rootDir, '/log/all-logs.log'),
            connection: path.join(params.rootDir, '/log/connections.log'),
            exception: path.join(params.rootDir, '/log/exceptions.log'),
            memleak: path.join(params.rootDir, '/log/memwatch.log'),
        }
    }

    // assemble config
    const config = {
        env: process.env.NODE_ENV || env.development,
        root: params.rootDir,

        log: log,
        node: node
    };

    return config;

}