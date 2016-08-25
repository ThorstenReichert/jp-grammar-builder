'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');

/**
 * Performs basic checks to see if argument fits "kuru" type
 *
 * @param {Kana} phrase
 * @throws {GrammarError}
 */

module.exports = function (phrase) {
    if (phrase.type !== 'kuru') {
        throw new GrammarError('Kuru-verb requires type "kuru", got "' + phrase.type + '"');
    }

    if (!phrase.endsWith(kana.ku.ru)) {
        throw new GrammarError(phrase.toString() + ' does not end in "kuru"');
    }
};