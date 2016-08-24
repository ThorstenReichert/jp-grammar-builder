'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./imperative');
const apply = rule.apply;

describe('grammar#imperative', function () {

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

    });

    describe('.apply', function () {

        it('should exist', function () {
            expect(apply).to.exist;
        });

        it('should be function', function () {
            expect(typeof apply).to.equal('function');
        });

        it('should conjugate taberu (ichidan) to tabero (imperative)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabero');
            expect(type).to.equal('imperative');
        });

        it('should conjugate tukau (godan) to tukae (imperative)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukae');
            expect(type).to.equal('imperative');
        });

        it('should conjugate yaku (godan) to yake (imperative)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yake');
            expect(type).to.equal('imperative');
        });

        it('should conjugate oyogu (godan) to oyoge (imperative)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('oyoge');
            expect(type).to.equal('imperative');
        });

        it('should conjugate simesu (godan) to simese (imperative)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('simese');
            expect(type).to.equal('imperative');
        });

        it('should conjugate matu (godan) to mate (imperative)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('mate');
            expect(type).to.equal('imperative');
        });

        it('should conjugate sinu (godan) to sine (imperative)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sine');
            expect(type).to.equal('imperative');
        });

        it('should conjugate yobu (godan) to yobe (imperative)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yobe');
            expect(type).to.equal('imperative');
        });

        it('should conjugate yomu (godan) to yome (imperative)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yome');
            expect(type).to.equal('imperative');
        });

        it('should conjugate hasiru (godan) to hasire (imperative)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hasire');
            expect(type).to.equal('imperative');
        });

    });

});