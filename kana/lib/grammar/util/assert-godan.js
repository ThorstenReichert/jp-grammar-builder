'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

/**
 * Performs basic checks to see if argument fits "godan" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports =  function (phrase) {
    if (phrase.type !== 'godan') {
        throw new GrammarError('Godan conjugation requires type "godan", got "' + phrase.type + '".');
    }

    let expectation = [
        kana.a.u.toString(),
        kana.i.u.toString(),
        kana.u.u.toString(),
        kana.o.u.toString(),
        kana.ku.toString(),
        kana.gu.toString(),
        kana.su.toString(),
        kana.tu.toString(),
        kana.nu.toString(),
        kana.mu.toString(),
        kana.bu.toString(),
        kana.ru.toString()
    ]

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
        throw new GrammarError(phrase.toString() + ' has unexpected ending for godan-verb');
    }
};