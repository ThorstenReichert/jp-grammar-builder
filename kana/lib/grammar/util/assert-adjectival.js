'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

/**
 * Performs basic checks to see if argument fits "adjectival" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'adjectival') {
        throw new GrammarError('Adjectival conjugation requires type "adjectival", got "' + phrase.type + '".');
    }

    if (!phrase.endsWith(kana.i)) {
        throw new GrammarError(phrase.toString() + ' has unexpected ending for adjectival');
    }
};