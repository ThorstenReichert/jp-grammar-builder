'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');
const assert = require('../util/assert-type');

module.exports = {
    require: ['godan', 'ichidan', 'kuru', 'suru'],

    /**
     * Imperative conjugation on argument
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch(phrase.type) {

            case 'ichidan':
                assert['ichidan'](phrase);
                phrase = conjIchidan(phrase, kana.ro);
                break;

            case 'godan':
                assert['godan'](phrase);
                phrase = conjGodan(phrase, 'e');
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ko.i);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.si.ro);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'imperative';
        return phrase;
    }
};