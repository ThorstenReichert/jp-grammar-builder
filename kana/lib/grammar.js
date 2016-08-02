'use strict';


module.exports = function (kana) {

    const map = function (k, m) {
        if (m[k.toString()]) {
            return m[k.toString()];
        } else {
            throw new Error('grammar#map: no match found for ' + k.toString());
        }
    };

    const requireEnding = function (k, e) {
        if (!k.endsWith(e)) {
            throw new Error('grammar#requireEnding: ending ' + e.toString() + ' required of ' + k.toString());
        }
    }

    const grammar = {
        stem: {
            require: ['godan', 'ichidan'],
            output: 'stem',
            apply: function (k) {
                if ('ichidan' === k.type) {
                    if (k.endsWith(kana.ru)) {
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
                return k.ma.su;
            }
        },

        past: {
            require: ['ichidan', 'godan'],
            apply: function (k) {
                if ('ichidan' === k.type) {
                    if (k.endsWith(kana.ru)) {
                        k.pop();
                        k.add(kana.ta);
                    } else {
                        throw new Error('past: ichidan type kana ' + k.toString() + ' not ending in ru');
                    }
                } else if ('godan' === k.type) {
                    k.add(map(k.pop(), {
                        su: kana.si.ta,
                        ku: kana.i.ta,
                        gu: kana.i.da,
                        mu: kana.n.da,
                        bu: kana.n.da,
                        nu: kana.n.da,
                        ru: kana.t.ta,
                        u: kana.t.ta,
                        tu: kana.t.ta
                    }));
                }

                return k;
            }
        },

        negative: {
            require: ['ichidan', 'godan'],
            apply: function (k) {
                if ('ichidan' === k.type) {
                    requireEnding(k, kana.ru);
                    k.pop();
                    k.add(kana.na.i);
                } else if ('godan' === k.type) {
                    let end = k.pop().toString();
                    if ('u' !== end.charAt(end.length - 1)) {
                        throw new Error('grammar#negative: godan type verb ' + k.toString() + end + ' not ending in *u')
                    }
                    end = end.substr(0, end.length - 1) + 'a';
                    k.add(kana[end].na.i);
                }

                return k;
            }
        }
    };

    return grammar;
};