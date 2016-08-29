'use strict';

const httpStatus = require('http-status');
const KanaError = require('../error/kana-error');


module.exports = function (err, req, res, next) {
    if (!err) {
        return next();
    }

    if (err instanceof KanaError) {

        if (req.result) {
            req.result[req.result.length - 1].error = err.message;
        } else {
            req.result = {
                error: err.message
            };
        }

        return res.status(httpStatus.BAD_REQUEST).json(req.result);

    } else {
        next(err);
    }
};