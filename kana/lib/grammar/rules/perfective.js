'use strict';

module.exports = function (kana) {

    const conjIchidan = require('../util/conjugate-ichidan')(kana);
    const map = require('../util/map');

    return {
        require: ['ichidan', 'godan'],

        apply: function (phrase) {
            switch(phrase.type) {
                case 'ichidan':
                    phrase = conjIchidan(phrase, kana.ta);
                    break;
                case 'godan':
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
            }

            phrase.type = '';
            return phrase;
        }
    };

};