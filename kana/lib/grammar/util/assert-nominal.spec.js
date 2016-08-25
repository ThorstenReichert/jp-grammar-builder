'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-nominal');

describe('util#assert-nominal', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for sizuka (nominal)', function () {
        let test = function () {
            assert(kana.nominal.si.zu.ka);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not nominal', function () {
        let test = function () {
            assert(kana.ichidan.si.zu.ka);
        };
        expect(test).to.throw(GrammarError);
    });

});