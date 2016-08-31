'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const hpp = require('hpp');

module.exports = function (wagner) {
    const parseKana = require('./middleware/parse-kana')(wagner);
    const procKana = require('./middleware/proc-kana')(wagner);
    const kanaErrorHandler = require('./middleware/kana-error-handler')(wagner);
    const grammarErrorHandler = require('./middleware/grammar-error-handler')(wagner);
    const errorHandler = require('./middleware/error-handler')(wagner);

    router.get('/ping', function (req, res) {
        res.status(200).send();
    });

    router.all('/kana',
        bodyParser.urlencoded({extended: false}),
        bodyParser.json(),
        hpp(),
        parseKana,
        procKana,
        kanaErrorHandler,
        grammarErrorHandler,
        errorHandler,
        function (req, res) {
            res.status(200).json(req.result);
        }
    );

    router.all('*', function (req, res) {
        res.status(404).send();
    });

    return router;
}
