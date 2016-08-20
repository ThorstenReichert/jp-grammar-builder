'use strict';

module.exports = function (kana) {

    const conjGodan = require('../util/conjugate-godan')(kana);
    const conjIchidan = require('../util/conjugate-ichidan')(kana);

    return {
        require: ['ichidan', 'godan'],

        apply: function (phrase) {
            switch(phrase.type) {
                case 'ichidan':
                    phrase = conjIchidan(phrase, kana.ra.re.ru);
                    break;

                case 'godan':
                    phrase = conjGodan(phrase, 'e', kana.ru);
                    break;
            }

            phrase.type = 'ichidan';
            return phrase;
        }
    };

};