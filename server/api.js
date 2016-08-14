'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

module.exports = function (wagner) {
    const parseKana = require('./middleware/parse-kana')(wagner);
    const procKana = require('./middleware/proc-kana')(wagner);

    router.get('/ping', function (req, res) {
        res.status(200).send();
    });

    router.all('/kana',
        bodyParser.urlencoded({extended: false}),
        bodyParser.json(),
        parseKana,
        procKana,
        function (req, res) {
            res.status(200).json(req.result);
        }
    );

    router.all('*', function (req, res) {
        res.status(404).send();
    });

    return router;
}
