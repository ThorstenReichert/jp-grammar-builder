'use strict';

module.exports = {
    stem: {
        require: ['godan', 'ichidan'],
        output: 'stem',
        apply: function (k) {
            if ('ichidan' === k.type) {
                if (k.endsWith('ru')) {
                    k.pop();
                } else {
                    throw new Error('verb-stem: ichidan type kana ' + k.toString() + ' not ending in ru');
                }
            } else if ('godan' === k.type) {
                let end = k.pop().toString();
                if ('u' === end.charAt(end.length - 1)) {
                    k.add(end.substr(0, end.length - 1) + 'i');
                } else {
                    throw new Error('verb-stem: godan type kana ' + k.toString() + end + ' not ending in *u');
                }
            } else {
                throw new Error('verb-stem: expect ichidan or godan type kana');
            }

            k.type = 'stem';
            return k;
        }
    },

    distal: {
        require: 'stem',
        output: '',
        apply: function (k) {
            if ('stem' === k.type) {
                return k.ma.su;
            } else {
                throw new Error('distal: expect stem type kana');
            }
        }
    }
};