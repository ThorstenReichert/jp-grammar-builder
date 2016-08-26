'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

/**
 * Performs basic checks to see if argument fits "te-form" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'te-form') {
        throw new GrammarError('Te-form conjugation requires type "te-form", got "' + phrase.type + '".');
    }

    if (!phrase.endsWith(kana.te) && !phrase.endsWith(kana.de)) {
        throw new GrammarError(phrase.toString() + ' does not end in "te" or "de"');
    }
};