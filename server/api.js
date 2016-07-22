'use strict';

const express = require('express');
const router = express.Router();

router.get('/ping', function (req, res) {
    res.status(200).send();
});

module.exports = router;