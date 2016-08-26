'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

/**
 * Performs basic checks to see if argument fits "i-form" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'i-form') {
        throw new GrammarError('I-form conjugation requires type "i-form", got "' + phrase.type + '".');
    }
};