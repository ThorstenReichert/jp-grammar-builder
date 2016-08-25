'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');

/**
 * Performs basic checks to see if argument fits "suru" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'suru') {
        throw new GrammarError('Suru-verb conjugation requires type "suru", got "' + phrase.type + '"');
    }

    if (!phrase.endsWith(kana.su.ru)) {
        throw new GrammarError(phrase.toString() + ' does not end in "suru"');
    }
};