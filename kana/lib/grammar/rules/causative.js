'use strict';

module.exports = function (kana) {

    const conjGodan = require('../util/conjugate-godan')(kana);
    const conjIchidan = require('../util/conjugate-ichidan')(kana);

    return {
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

};