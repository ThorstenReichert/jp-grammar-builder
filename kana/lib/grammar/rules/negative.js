'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');
const assert = require('../util/assert-type');

module.exports = {
    require: ['adjectival', 'godan', 'ichidan', 'kuru','nominal', 'suru'],

    /**
     * Negative conjugation on argument
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch(phrase.type) {

            case 'adjectival':
                assert['adjectival'](phrase);
                phrase.pop();
                phrase.add(kana.ku.na.i);
                break;

            case 'ichidan':
                assert['ichidan'](phrase);
                phrase = conjIchidan(phrase, kana.na.i);
                break;

            case 'godan':
                assert['godan'](phrase);
                if (phrase.endsWith(kana.u)) {
                    phrase.pop();
                    phrase.add(kana.wa.na.i);
                }
                else {
                    phrase = conjGodan(phrase, 'a', kana.na.i);
                }
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ko.na.i);
                break;

            case 'nominal':
                assert['nominal'](phrase);
                phrase.add(kana.zya.na.i);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.si.na.i);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'adjectival';
        return phrase;
    }
};