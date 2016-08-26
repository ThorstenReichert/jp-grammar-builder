'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('../util/assert-type');
const iForm = require('./i-form').apply;

module.exports = {

    require: ['godan', 'ichidan', 'kuru', 'suru', 'i-form'],

    /**
     * Conjugate argument into -tai form (desire)
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
                phrase = iForm(phrase);
                phrase.add(kana.ta.i);
                break;

            case 'i-form':
                assert['i-form'](phrase);
                phrase.add(kana.ta.i);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'adjectival';
        return phrase;
    }

};
