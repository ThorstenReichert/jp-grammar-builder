'use strict';

const httpStatus = require('http-status');

module.exports = function (err, req, res, next) {
    if (!err) {
        return next();
    }

    res.status(httpStatus.BAD_REQUEST).json({
        error: err.message
    });
};