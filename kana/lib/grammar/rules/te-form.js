'use strict';

const map = require('../util/map');
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');
const assert = require('../util/assert-type');

module.exports = {
    require: ['adjectival', 'ichidan', 'godan', 'kuru', 'nominal', 'suru'],

    /**
     * te-form conjugation on argument
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
                phrase.add(kana.ku.te);
                break;

            case 'ichidan':
                phrase = conjIchidan(phrase, kana.te);
                break;

            case 'godan':
                phrase.add(map(phrase.pop(), {
                    u: kana.t.te,
                    ku: kana.i.te,
                    gu: kana.i.de,
                    su: kana.si.te,
                    tu: kana.t.te,
                    bu: kana.n.de,
                    nu: kana.n.de,
                    mu: kana.n.de,
                    ru: kana.t.te
                }));
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ki.te);
                break;

            case 'nominal':
                assert['nominal'](phrase);
                phrase.add(kana.de);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.si.te);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = 'te-form';
        return phrase;
    }
};