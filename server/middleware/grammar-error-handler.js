'use strict';

const httpStatus = require('http-status');
const GrammarError = require('../../kana').GrammarError;

module.exports = function (err, req, res, next) {
    if (!err) {
        return next();
    }

    if (err instanceof GrammarError) {

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