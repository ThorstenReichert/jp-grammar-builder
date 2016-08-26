'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./te-form');
const apply = rule.apply;

describe('grammar#te-form', function () {

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

        it('should contain adjectival', function () {
            expect(rule.require.indexOf('adjectival')).to.be.at.least(0);
        });

        it('should contain nominal', function () {
            expect(rule.require.indexOf('nominal')).to.be.at.least(0);
        });

        it('should contain kuru', function () {
            expect(rule.require.indexOf('kuru')).to.be.at.least(0);
        });

        it('should contain suru', function () {
            expect(rule.require.indexOf('suru')).to.be.at.least(0);
        });

    });

    describe('.apply', function () {

        it('should exist', function () {
            expect(apply).to.exist;
        });

        it('should be function', function () {
            expect(typeof apply).to.equal('function');
        });

        it('should conjugate taberu (ichidan) to tabete (te-form)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabete');
            expect(type).to.equal('te-form');
        });

        it('should conjugate tukau (godan) to tukatte (te-form)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukatte');
            expect(type).to.equal('te-form');
        });

        it('should conjugate yaku (godan) to yaite (te-form)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yaite');
            expect(type).to.equal('te-form');
        });

        it('should conjugate oyogu (godan) to oyoide (te-form)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('oyoide');
            expect(type).to.equal('te-form');
        });

        it('should conjugate simesu (godan) to simesite (te-form)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('simesite');
            expect(type).to.equal('te-form');
        });

        it('should conjugate matu (godan) to matte (te-form)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('matte');
            expect(type).to.equal('te-form');
        });

        it('should conjugate sinu (godan) to sinde (te-form)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sinde');
            expect(type).to.equal('te-form');
        });

        it('should conjugate yobu (godan) to yonde (te-form)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yonde');
            expect(type).to.equal('te-form');
        });

        it('should conjugate yomu (godan) to yonde (te-form)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yonde');
            expect(type).to.equal('te-form');
        });

        it('should conjugate hasiru (godan) to hasitte (te-form)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hasitte');
            expect(type).to.equal('te-form');
        });

        it('should conjugate kuru (kuru) to kite (te-form)', function () {
            let phrase = kana.kuru.ku.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('kite');
            expect(type).to.equal('te-form');
        });

        it('should conjugate suru (suru) to site (te-form)', function () {
            let phrase = kana.suru.su.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('site');
            expect(type).to.equal('te-form');
        });

        it('should conjugate yasui (adjectival) to yasukute (te-form)', function () {
            let phrase = kana.adjectival.ya.su.i;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yasukute');
            expect(type).to.equal('te-form');
        });

        it('should conjugate kantan (nominal) to kantande (te-form)', function () {
            let phrase = kana.nominal.ka.n.ta.n;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('kantande');
            expect(type).to.equal('te-form');
        });

    });

});