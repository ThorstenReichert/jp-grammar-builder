'use strict';

const _ = require('lodash');

module.exports = function (wagner) {
    return wagner.invoke(function (kana) {
        return function (req, res, next) {
            let grammar = req.body.grammar;

            if (req.kana) {
                req.result = [{
                    kana: req.kana.clone().toArray(),
                    type: req.kana.type
                }];

                if (!req.body.grammar || req.body.grammar === '') {
                    return next();
                }

                if (typeof req.body.grammar === 'string') {
                    req.body.grammar = [req.body.grammar];
                }

                try {
                    _.each(req.body.grammar, function (id) {
                        let i = req.result.push({
                            rule: id
                        });
                        req.kana.applyRule(id);
                        req.result[i-1].kana = req.kana.clone().toArray();
                        req.result[i-1].type = req.kana.type;
                    });
                }
                catch(err) {
                    req.result[req.result.length - 1].error = err.message;
                }
                finally {
                    return next();
                }
            } else {
                return next(new Error('req.kana not found'));
            }
        };
    });
};