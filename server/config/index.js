'use strict';

const cluster = require('cluster');
const env = require('./env');
const path = require('path');

module.exports = function (params) {

    // node config
    const node = {
        port: process.env.NODE_PORT || process.env.PORT || 3000
    };

    if (cluster.isWorker) {
        node.id = cluster.worker.id;
    } else {
        node.id = null;
    }

    // assemble config
    const config = {
        env: process.env.NODE_ENV || env.development,
        root: params.rootDir,
        node: node
    };

    return config;

}