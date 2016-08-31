'use strict';

const KanaError = require('../../kana').KanaError;

module.exports = function (wagner) {
    return wagner.invoke(function (logger, kana) {

        /**
         * expects req.body to be of form
         *
         *      {
         *          kana: {Array},
         *          type: {String},
         *          grammar: {Array}
         *      }
         *
         * where
         *      - kana is Array of kana-characters (i.e. ['ta', 'be', 'ru'])
         *      - type is grammatical type of kana (i.e. 'ichidan')
         *      - grammar is Array of grammar rule id's (i.e. ['stem', 'distal'])
         */

        return function (req, res, next) {
            if (req.body.kana) {
                let body = req.body;
                if (Array.isArray(body.kana) && (typeof body.type === 'string' || !body.type)) {
                    let error = null;
                    try {
                        req.kana = kana.create(body.kana, body.type);
                        logger.debug('parsed kana: ' + req.kana.toString() + ' (' + req.kana.type + ')');
                    }
                    catch(err) {
                        error = err;
                    }
                    finally {
                        return next(error);
                    }
                } else {
                    return next(new Error('invalid kana argument given'));
                }
            } else {
                return next(new Error('no kana argument given'));
            }
        };
    });
};