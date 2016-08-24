'use strict';

const kana = require('./lib/kana');
const Kana = require('./lib/kana').class;
const grammar = require('./lib/grammar');
const GrammarError = require('./lib/error/grammar-error');

 // Attach applyRule memberfunction to Kana class

/**
 * @param {string} rule apply grammar rule with that name to Kana object
 * @return {Kana} resulting Kana object
 */
Kana.prototype.applyRule = function (rule) {
    if (grammar[rule]) {
        this.require(grammar[rule].require);
        return grammar[rule].apply(this);
    } else {
        throw new GrammarError('Rule "' + rule + '" not found');
    }
};

module.exports = kana;