'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const parseKana = require('./middleware/parse-kana');
const procKana = require('./middleware/proc-kana');

router.get('/ping', function (req, res) {
    res.status(200).send();
});

router.all('/kana',
    bodyParser.urlencoded({extended: false}),
    bodyParser.json(),
    parseKana,
    procKana,
    function (req, res) {
        res.status(200).json(res.kana);
    }
);

router.all('*', function (req, res) {
    res.status(404).send();
});

module.exports = router;