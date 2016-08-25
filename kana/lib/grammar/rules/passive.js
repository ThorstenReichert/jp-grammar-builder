'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');
const assert = require('../util/assert-type');

module.exports = {
    require: ['ichidan', 'godan', 'kuru', 'suru'],

    /**
     * Passive conjugation on argument
     *
     * @param {Kana} phrase
     * @return {Kana}
     * @throws {GrammarError}
     */

    apply: function (phrase) {
        switch(phrase.type) {

            case 'ichidan':
                assert['ichidan'](phrase);
                phrase = conjIchidan(phrase, kana.ra.re.ru);
                break;

            case 'godan':
                assert['godan'](phrase);
                if (phrase.endsWith(kana.u)) {
                    phrase.pop();
                    phrase.add(kana.wa.re.ru);
                }
                else {
                    phrase = conjGodan(phrase, 'a', kana.re.ru);
                }
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ko.ra.re.ru);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.sa.re.ru);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'ichidan';
        return phrase;
    }
};