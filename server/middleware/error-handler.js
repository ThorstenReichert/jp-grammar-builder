'use strict';

const httpStatus = require('http-status');

module.exports = function (err, req, res, next) {
    if (!err) {
        return next();
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal Server Error'
    });
};