'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

module.exports = function (phrase) {
    if (phrase.type !== 'ichidan') {
        throw new GrammarError('Ichidan conjugation requires type "ichidan", got "' + phrase.type + '".');
    }

    let expectation = [
        kana.i.ru.toString(),
        kana.e.ru.toString()
    ];

    let string = phrase.toString();
    let fulfilled = false;
    for (let i = 0; i < expectation.length; i++) {
        let ending = string.substring(
            string.length - expectation[i].length
        );

        if (ending === expectation[i]) {
            fulfilled = true;
            break;
        }
    }

    if (false === fulfilled) {
        throw new GrammarError(phrase.toString() + ' has unexpected ending for ichidan-verb');
    }
};