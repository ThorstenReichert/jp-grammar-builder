'use strict';

module.exports = function (kana) {

    return function (phrase, append) {
        phrase.pop();
        if (append) {
            phrase.add(append);
        }

        return phrase;
    }

};