'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-i-form');

describe('util#assert-nominal', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for tabe (i-form)', function () {
        let test = function () {
            assert(kana['i-form'].ta.be);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not "i-form"', function () {
        let test = function () {
            assert(kana.ichidan.ta.be);
        };
        expect(test).to.throw(GrammarError);
    });

});