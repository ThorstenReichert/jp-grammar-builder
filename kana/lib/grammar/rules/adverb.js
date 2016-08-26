'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('../util/assert-type');

module.exports = {

    require: ['adjectival', 'nominal'],

    /**
     * Conjugates argument into an adverb
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch (phrase.type) {

            case 'adjectival':
                assert['adjectival'](phrase);
                phrase.pop();
                phrase.add(kana.ku);
                break;

            case'nominal':
                assert['nominal'](phrase);
                phrase.add(kana.ni);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'adverb';
        return phrase;
    }

};