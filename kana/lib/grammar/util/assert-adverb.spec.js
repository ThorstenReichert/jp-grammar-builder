'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-adverb');

describe('util#assert-nominal', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for hayaku (adverb)', function () {
        let test = function () {
            assert(kana['adverb'].ha.ya.ku);
        };
        expect(test).to.not.throw();
    });

    it('should not throw error for kierini (adverb)', function () {
        let test = function () {
            assert(kana['adverb'].ki.re.i.ni);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if not ending in "ku" or "ni"', function () {
        let test = function () {
            assert(kana['adverb'].ta.be.ru);
        };
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError if type is not "adverb"', function () {
        let test = function () {
            assert(kana.ichidan.ha.ya.ku);
        };
        expect(test).to.throw(GrammarError);
    });

});