'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-adjectival');

describe('util#assert-adjectival', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for oisii (adjectival)', function () {
        let test = function () {
            assert(kana.adjectival.o.i.si.i);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not adjectival', function () {
        let test = function () {
            assert(kana.ichidan.o.i.si.i);
        };
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError if not ending in "i"', function () {
        let test = function () {
            assert(kana.ichidan.si.zu.ka);
        };
        expect(test).to.throw(GrammarError);
    });

});