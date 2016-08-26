'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('../util/assert-type');
const adverb = require('./adverb').apply;

module.exports = {

    require: ['adjectival', 'adverb', 'nominal'],

    /**
     * Conjugate argument into -naru form (becoming something)
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch (phrase.type) {

            case 'adjectival':
            case 'nominal':
                phrase = adverb(phrase);
                phrase.add(kana.na.ru);
                break;

            case 'adverb':
                assert['adverb'](phrase);
                phrase.add(kana.na.ru);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'ichidan';
        return phrase;
    }

};
