'use strict';

const cluster = require('cluster');
const env = require('./env');

// node config
const node = {
    port: process.env.NODE_PORT || 3000
};

if (cluster.isWorker) {
    node.id = cluster.worker.id;
} else {
    node.id = null;
}

// assemble config
const config = {
    env: process.env.NODE_ENV || env.development,
    node: node
};

module.exports = config;