'use strict';

const forky = require('forky');
const path = require('path');

forky({
    path: path.join(__dirname, '/worker.js'),
    workers: process.env.WEB_CONCURRENCY || 1,
    enable_logging: true
});