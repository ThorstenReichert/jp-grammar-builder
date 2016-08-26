'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./naru');
const apply = rule.apply;

describe('grammar#progressive', function () {

    it('should export object', function () {
        expect(typeof rule).to.equal('object');
    });

    describe('.require', function () {

        it('should exist', function () {
            expect(rule.require).to.exist;
        });

        it('should be Array', function () {
            expect(Array.isArray(rule.require)).to.be.true;
        });

        it('should contain adjectival', function () {
            expect(rule.require.indexOf('adjectival')).to.be.at.least(0);
        });

        it('should contain adverb', function () {
            expect(rule.require.indexOf('adverb')).to.be.at.least(0);
        });

        it('should contain nominal', function () {
            expect(rule.require.indexOf('nominal')).to.be.at.least(0);
        });

    });

    describe('.apply', function () {

        it('should exist', function () {
            expect(apply).to.exist;
        });

        it('should be function', function () {
            expect(typeof apply).to.equal('function');
        });

        it('should conjugate hayai (adjectival) to hayakunaru (ichidan)', function () {
            let phrase = kana.adjectival.ha.ya.i;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hayakunaru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate tuyoku (adverb) to tuyokunaru (ichidan)', function () {
            let phrase = kana.adverb.tu.yo.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tuyokunaru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate kirei (nominal) to kireininaru (ichidan)', function () {
            let phrase = kana.nominal.ki.re.i;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('kireininaru');
            expect(type).to.equal('ichidan');
        });

    });

});