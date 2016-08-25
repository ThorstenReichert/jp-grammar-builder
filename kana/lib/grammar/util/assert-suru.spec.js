'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-suru');

describe('util#assert-suru', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for suru (suru)', function () {
        let test = function () {
            assert(kana.suru.su.ru);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not "suru"', function () {
        let test = function () {
            assert(kana.ichidan.su.ru);
        };
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError if not ending in "suru"', function () {
        let test = function () {
            assert(kana.suru.ku.ru);
        };
        expect(test).to.throw(GrammarError);
    });

});