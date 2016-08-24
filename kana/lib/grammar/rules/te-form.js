'use strict';

const map = require('../util/map');
const kana = require('../../kana');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');

module.exports = {
    require: ['ichidan', 'godan'],

    apply: function (phrase) {
        switch(phrase.type) {
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
        }

        phrase.type = 'te-form';
        return phrase;
    }
};