'use strict';

const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const conjIchidan = require('../util/conjugate-ichidan');
const map = require('../util/map');
const assert = require('../util/assert-type');

module.exports = {
    require: ['ichidan', 'godan', 'adjectival', 'nominal'],

    /**
     * Perfective conjugation on argument
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
                phrase.add(kana.ka.t.ta);
                break;

            case 'godan':
                assert['godan'](phrase);
                phrase.add(map(phrase.pop(), {
                    u: kana.t.ta,
                    ku: kana.i.ta,
                    gu: kana.i.da,
                    su: kana.si.ta,
                    tu: kana.t.ta,
                    bu: kana.n.da,
                    nu: kana.n.da,
                    mu: kana.n.da,
                    ru: kana.t.ta
                }));
                break;

            case 'ichidan':
                assert['ichidan'](phrase);
                phrase = conjIchidan(phrase, kana.ta);
                break;

            case 'kuru':
                assert['kuru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.ki.ta);
                break;

            case 'nominal':
                assert['nominal'](phrase);
                phrase.add(kana.da.t.ta);
                break;

            case 'suru':
                assert['suru'](phrase);
                phrase.pop();
                phrase.pop();
                phrase.add(kana.si.ta);
                break;

            default:
                throw new GrammarError('Conjugation not implemented for type "' + phrase.type + '"');
        }

        phrase.type = '';
        return phrase;
    }
};