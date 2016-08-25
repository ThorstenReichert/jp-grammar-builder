'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');
const assert = require('../util/assert-type');

module.exports = {
    require: ['ichidan', 'godan', 'kuru', 'suru'],

    /**
     * i-form conjugation on argument
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch(phrase.type) {
            case 'ichidan':
                phrase = conjIchidan(phrase, null);
                break;

            case 'godan':
                phrase = conjGodan(phrase, 'i');
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ki);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.si);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'i-form';
        return phrase;
    }
};