'use strict';

const httpStatus = require('http-status');
const env = require('../config/env');

module.exports = function (wagner) {
    return wagner.invoke(function (config, logger) {

        return function (err, req, res, next) {
            if (!err) {
                return next();
            }

            logger.error(err);

            if (config.env !== env.development) {
                delete err.stack;
            }

            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        };

    });
};

