'use strict';

const kana = require('../../kana');
const assertIchidan = require('./assert-ichidan');

module.exports = function (phrase, append) {
    phrase.pop();
    if (append) {
        phrase.add(append);
    }

    return phrase;
};