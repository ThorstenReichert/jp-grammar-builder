'use strict';

const _ = require('lodash');

module.exports = function (wagner) {
    return wagner.invoke(function (kana) {
        return function (req, res, next) {
            let grammar = req.body.grammar;

            if (!grammar) {
                return next();
            }

            if (req.kana) {
                if (typeof req.body.grammar === 'string') {
                    req.body.grammar = [req.body.grammar];
                }

                let error = null;

                try {
                    _.each(req.body.grammar, function (id) {
                        req.kana.applyRule(id);
                    });
                }
                catch(err) {
                    error = err;
                }
                finally {
                    return next(error);
                }
            } else {
                return next(new Error('req.kana not found'));
            }
        };
    });
};