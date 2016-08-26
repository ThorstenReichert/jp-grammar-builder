'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-te-form');

describe('util#assert-nominal', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for tabete (te-form)', function () {
        let test = function () {
            assert(kana['te-form'].ta.be.te);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if not ending in "te" or "de"', function () {
        let test = function () {
            assert(kana['te-form'].ta.be.ru);
        };
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError if type is not "te-form"', function () {
        let test = function () {
            assert(kana.ichidan.ta.be.te);
        };
        expect(test).to.throw(GrammarError);
    });

});