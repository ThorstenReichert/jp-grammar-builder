'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');
const assert = require('../util/assert-type');

module.exports = {
    require: ['adjectival', 'ichidan', 'godan', 'kuru', 'nominal', 'suru'],

    /**
     * Volitional conjugation on argument
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
                phrase.add(kana.ka.ro.u);
                break;

            case 'ichidan':
                assert['ichidan'](phrase);
                phrase = conjIchidan(phrase, kana.yo.u);
                break;

            case 'godan':
                assert['godan'](phrase);
                phrase = conjGodan(phrase, 'o', kana.u);
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ko.yo.u);
                break;

            case 'nominal':
                assert['nominal'](phrase);
                phrase.add(kana.da.ro.u);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.si.yo.u);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'volitional';
        return phrase;
    }
};