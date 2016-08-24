'use strict';

const kana = require('../../kana');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');

module.exports = {
    require: ['godan', 'ichidan'],

    apply: function (phrase) {
        switch(phrase.type) {
            case 'ichidan':
                phrase = conjIchidan(phrase, kana.na.i);
                break;

            case 'godan':
                if (phrase.endsWith(kana.u)) {
                    phrase.pop();
                    phrase.add(kana.wa.na.i);
                }
                else {
                    phrase = conjGodan(phrase, 'a', kana.na.i);
                }
                break;
        }

        phrase.type = 'adjectival';
        return phrase;
    }
};