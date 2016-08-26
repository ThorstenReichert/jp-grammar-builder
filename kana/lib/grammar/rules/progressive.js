'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('../util/assert-type');
const teForm = require('./te-form').apply;

module.exports = {

    require: ['godan', 'ichidan', 'kuru', 'suru', 'te-form'],

    /**
     * Conjugate argument into progressive-tense
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch (phrase.type) {

            case 'godan':
            case 'ichidan':
            case 'kuru':
            case 'suru':
                phrase = teForm(phrase);
                phrase.add(kana.i.ru);
                break;

            case 'te-form':
                assert['te-form'](phrase);
                phrase.add(kana.i.ru);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'ichidan';
        return phrase;
    }

};
