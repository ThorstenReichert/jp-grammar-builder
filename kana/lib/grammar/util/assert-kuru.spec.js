'use strict';

'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');
const assert = require('./assert-kuru');

describe('util#assert-kuru', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error for kuru (kuru)', function () {
        let test = function () {
            assert(kana.kuru.ku.ru);
        };
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not "kuru"', function () {
        let test = function () {
            assert(kana.ichidan.ku.ru);
        };
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError if not ending in "kuru"', function () {
        let test = function () {
            assert(kana.kuru.su.ru);
        };
        expect(test).to.throw(GrammarError);
    });

});