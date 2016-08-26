'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./progressive');
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

        it('should contain ichidan', function () {
            expect(rule.require.indexOf('ichidan')).to.be.at.least(0);
        });

        it('should contain godan', function () {
            expect(rule.require.indexOf('godan')).to.be.at.least(0);
        });

        it('should contain kuru', function () {
            expect(rule.require.indexOf('kuru')).to.be.at.least(0);
        });

        it('should contain suru', function () {
            expect(rule.require.indexOf('suru')).to.be.at.least(0);
        });

        it('should contain te-form', function () {
            expect(rule.require.indexOf('te-form')).to.be.at.least(0);
        });

    });

    describe('.apply', function () {

        it('should exist', function () {
            expect(apply).to.exist;
        });

        it('should be function', function () {
            expect(typeof apply).to.equal('function');
        });

        it('should conjugate taberu (ichidan) to tabeteiru (ichidan)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabeteiru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate tukau (godan) to tukatteiru (ichidan)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukatteiru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate kuru (kuru) to kiteiru (ichidan)', function () {
            let phrase = kana.kuru.ku.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('kiteiru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate suru (suru) to siteiru (ichidan)', function () {
            let phrase = kana.suru.su.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('siteiru');
            expect(type).to.equal('ichidan');
        });

    });

});