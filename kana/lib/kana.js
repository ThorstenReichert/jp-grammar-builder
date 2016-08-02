'use strict';

const chars = require('./chars');
const types = require('./types');
const specials = require('./specials');
let grammar = null;

class Kana {
    /**
     * @constructor
     * @param {string,Array,Kana} word construct Kana object from word
     * @param {string} type set type of Kana object
     */
    constructor(word, type) {
        if (word) {
            this._word = Kana.makeArray(word);
        }
        else {
            this._word = [];
        }
        this._type = type || '';
    }

    static verify(kana) {
        return (typeof kana === 'object') &&
            kana._word &&
            Kana.isValid(kana._word) &&
            kana._type &&
            Kana.isType(kana._type);
    }

    static isChar(s) {
        let a = Kana.makeArray(s);

        for (let i = 0; i < a.length; i++) {
            if (-1 === chars.indexOf(a[i])) {
                return false;
            }
        }

        return true;
    }

    static isSpecial(s) {
        let a = Kana.makeArray(s);
        let res = true;

        for (let i = 0; i < specials.length; i++) {
            let partial = false;
            for (let j = 0; j < a.length; j++) {
                if (specials[i].char === a[j]) {
                    partial = true;
                }
            }
            res = res && partial;
        }

        return res;
    }

    static isType(t) {
        if (typeof t === 'string') {
            return -1 !== types.indexOf(t);
        }

        return false;
    }

    static isValid(s) {
        return Kana.isChar(s) || Kana.isSpecial(s);
    }

    static makeArray(s) {
        if (typeof s === 'string') {
            return [s];
        }
        else if(Array.isArray(s)) {
            return s;
        }
        else if (typeof s === 'object') {
            if (s._word && Array.isArray(s._word)) {
                return s._word;
            }
            else {
                throw new Error('Kana#makeArray: argument object contains no array _word');
            }
        }
        else {
            throw new Error('Kana#makeArray: argument type not supported');
        }
    }

    /**
     * @param {string,Array,Kana} s add this to Kana object
     * @return {Kana} returns the concatenated Kana object
     */
    add (s) {
        let a = Kana.makeArray(s);

        if (!Kana.isValid(a)) {
            throw new Error('kana#add: argument array invalid');
        }
        this._word = this._word.concat(a);

        return this;
    }

    /**
     * @param {string} rule apply grammar rule with that name to Kana object
     * @return {Kana} resulting Kana object
     */
    applyRule(rule) {
        if (grammar[rule]) {
            this.require(grammar[rule].require);
            return grammar[rule].apply(this);
        } else {
            throw new Error('kana#apply:Rule: rule ' + rule + ' not found');
        }
    }

    endsWith(s) {
        let a = Kana.makeArray(s);

        if (this._word.length < a.length) {
            return false;
        }

        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i] !== this._word[this._word.length - a.length + i]) {
                return false;
            }
        }

        return true;
    }

    equals (s) {
        let a = Kana.makeArray(s);

        if (a.length !== this._word.length) {
            return false;
        }

        let res = true;
        for (let i = 0; i < this._word.length; i++) {
            if (this._word[i] !== a[i]) {
                res = false;
                break;
            }
        }
        return res;
    }

    pop () {
        return new Kana(this._word.pop());
    }

    require(types) {
        if (!Array.isArray(types)) {
            if ('string' !== typeof types) {
                throw new Error('kana#require: invalid type requirements');
            }
            types = [types];
        }

        if (-1 === types.indexOf(this.type)) {
            throw new Error('kana#require: type ' + this._type + ' does not match requirements: ' + types.join(','));
        }
    }

    toArray () {
        return this._word;
    }

    toString (separator) {
        return this._word.join(separator || '');
    }
}

const kana = {};

chars.forEach(function (char) {
    if (kana[char]) {
        throw new Error('char: property ' + char + ' already defined on kana');
    }
    Object.defineProperty(kana, char, {
        get: function () { return new Kana([char]); }
    });

    if (Kana.prototype[char]) {
        throw new Error('char: property ' + char + ' already defined on Kana.prototype');
    }
    Object.defineProperty(Kana.prototype, char, {
        get: function () { return this.add(char); }
    });
});

types.forEach(function (type) {
    if (kana[type]) {
        throw new Error('type: property ' + type + ' already defined on kana');
    }
    Object.defineProperty(kana, type, {
        get: function () { return new Kana(null, type); }
    });

    if (Kana.prototype[type]) {
        throw new Error('type: property ' + type + ' already defined on Kana.prototype');
    }
    Object.defineProperty(Kana.prototype, type, {
        get: function () {
            this._type = type;
            return this;
        }
    });
});

if (Kana.prototype['type']) {
    throw new Error('type: property type already defined on Kana.prototype');
}
Object.defineProperty(Kana.prototype, 'type', {
    get: function () { return this._type; },
    set: function (t) {
        if (-1 === types.indexOf(t)) {
            throw new Error('type ' + t + ' not supported');
        }
        this._type = t;
    }
});

grammar = require('./grammar')(kana);

module.exports = kana;
module.exports.chars = chars;
module.exports.types = types;
module.exports.specials = specials;
module.exports.grammar = grammar;