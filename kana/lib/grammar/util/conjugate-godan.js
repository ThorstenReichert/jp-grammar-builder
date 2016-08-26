'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');
const assertGodan = require('./assert-godan');

module.exports = function (phrase, conj, append) {
    if (typeof conj !== 'string') {
        throw new TypeError('expected second argument to have type string');
    }

    if (1 !== conj.length) {
        throw new TypeError('expected second argument to be single char');
    }

    let ending = phrase.pop().toString();
    ending = ending.substring(0, ending.length - 1) + conj;

    phrase.add(ending);
    if (append) {
        phrase.add(append);
    }

    return phrase;
};