'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const GrammarError = require('../../error/grammar-error');

describe('util#assert-godan', function () {
    const assertgodanFactory = require('./assert-godan');
    const assertGodan = assertgodanFactory(kana);

    it('should export function', function () {
        expect(typeof assertgodanFactory).to.equal('function');
    });

    it('should export function that creates function', function () {
        expect(typeof assertGodan).to.equal('function');
    });

    it('should not throw error for hanasiau (godan)', function () {
        let phrase = kana.godan.ha.na.si.a.u;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for iu (godan)', function () {
        let phrase = kana.godan.i.u;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for suu (godan)', function () {
        let phrase = kana.godan.su.u;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for iku (godan)', function () {
        let phrase = kana.godan.i.ku;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for isogu (godan)', function () {
        let phrase = kana.godan.i.so.gu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for simesu (godan)', function () {
        let phrase = kana.godan.si.me.su;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for motu (godan)', function () {
        let phrase = kana.godan.mo.tu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for sinu (godan)', function () {
        let phrase = kana.godan.si.nu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for konomu (godan)', function () {
        let phrase = kana.godan.ko.no.mu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for asobu (godan)', function () {
        let phrase = kana.godan.a.so.bu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should not throw error for siru (godan)', function () {
        let phrase = kana.godan.si.ru;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.not.throw();
    });

    it('should throw GrammarError if type is not godan', function () {
        let phrase = kana.ichidan.si.nu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for eu (godan)', function () {
        let phrase = kana.godan.e.u;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for zu (godan)', function () {
        let phrase = kana.godan.zu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for hu (godan)', function () {
        let phrase = kana.godan.hu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for pu (godan)', function () {
        let phrase = kana.godan.pu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

    it('should throw GrammarError for yu (godan)', function () {
        let phrase = kana.godan.yu;
        function test() {
            assertGodan(phrase);
        }
        expect(test).to.throw(GrammarError);
    });

});