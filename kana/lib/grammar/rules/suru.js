'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const adverb = require('./adverb').apply;

module.exports = {

    require: ['nominal'],

    /**
     * Conjugate argument into -suru form (action towards something)
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch (phrase.type) {

            case 'nominal':
                phrase = adverb(phrase);
                phrase.add(kana.su.ru);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'suru';
        return phrase;
    }

};
