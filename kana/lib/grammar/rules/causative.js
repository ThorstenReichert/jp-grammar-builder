'use strict';

const kana = require('../../kana');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');

module.exports =  {
    require: ['ichidan', 'godan'],

    apply: function (phrase) {
        switch(phrase.type) {
            case 'ichidan':
                phrase = conjIchidan(phrase, kana.sa.se.ru);
                break;

            case 'godan':
                if (phrase.endsWith(kana.u)) {
                    phrase.pop();
                    phrase.add(kana.wa.se.ru);
                }
                else {
                    phrase = conjGodan(phrase, 'a', kana.se.ru);
                }
                break;
        }

        phrase.type = 'ichidan';
        return phrase;
    }
};