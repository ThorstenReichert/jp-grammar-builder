'use strict';

const kana = require('../../kana');
const conjGodan = require('../util/conjugate-godan');
const conjIchidan = require('../util/conjugate-ichidan');

module.exports = {
    require: ['ichidan', 'godan'],

    apply: function (phrase) {
        switch(phrase.type) {
            case 'ichidan':
                phrase = conjIchidan(phrase, kana.yo.u);
                break;

            case 'godan':
                phrase = conjGodan(phrase, 'o', kana.u);
                break;
        }

        phrase.type = 'volitional';
        return phrase;
    }
};