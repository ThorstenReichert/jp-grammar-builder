'use strict';

module.exports = function (wagner) {
    return wagner.invoke(function (kana) {
        return function (req, res, next) {
            if (req.body.kana) {
                let k = req.body.kana;
                if (Array.isArray(k.word) && (typeof k.type === 'string' || !k.type)) {
                    let error = null;
                    try {
                        req.kana = kana.create(k.word, k.type);
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