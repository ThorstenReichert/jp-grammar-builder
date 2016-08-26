'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

/**
 * Performs basic checks to see if argument fits "adverb" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'adverb') {
        throw new GrammarError('Adverb conjugation requires type "adverb", got "' + phrase.type + '".');
    }

    if (!phrase.endsWith(kana.ni) && !phrase.endsWith(kana.ku)) {
        throw new GrammarError(phrase.toString() + ' does not end in "ni" or "ku"');
    }
};