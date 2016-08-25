'use strict';

const GrammarError = require('../../error/grammar-error');
const kana = require('../../kana');

/**
 * Performs basic checks to see if argument fits "nominal" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'nominal') {
        throw new GrammarError('Nominal conjugation requires type "nominal". got "' + phrase.type + '"');
    }
};