'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-ichidan');

describe('util#assert-ichidan', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for taberu (ichidan)', function () {
        let phrase = kana.ichidan.ta.be.ru;
        function test() {
            assert(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for ikiru (ichidan)', function () {
        let phrase = kana.ichidan.i.ki.ru;
        function test() {
            assert(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not ichidan', function () {
        let phrase = kana.godan.i.ki.ru;
        function test() {
            assert(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for aru (ichidan)', function () {
        let phrase = kana.godan.a.ru;
        function test() {
            assert(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for uru (ichidan)', function () {
        let phrase = kana.godan.u.ru;
        function test() {
            assert(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for oru (ichidan)', function () {
        let phrase = kana.godan.o.ru;
        function test() {
            assert(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

});