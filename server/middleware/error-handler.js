'use strict';

const httpStatus = require('http-status');

module.exports = function (wagner) {
    return wagner.invoke(function (logger) {

        return function (err, req, res, next) {
            if (!err) {
                return next();
            }

            logger.error(err);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        };

    });
};

