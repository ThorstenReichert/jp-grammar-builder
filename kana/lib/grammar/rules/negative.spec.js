'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./negative');
const apply = rule.apply;

describe('grammar#negative', function () {

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

        it('should contain ichidan', function () {
            expect(rule.require.indexOf('ichidan')).to.be.at.least(0);
        });

        it('should contain godan', function () {
            expect(rule.require.indexOf('godan')).to.be.at.least(0);
        });

        it('should contain kuru', function () {
            expect(rule.require.indexOf('kuru')).to.be.at.least(0);
        });

        it('should contain nominal', function () {
            expect(rule.require.indexOf('nominal')).to.be.at.least(0);
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

        it('should conjugate taberu (ichidan) to tabenai (adjectival)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabenai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate tukau (godan) to tukawanai (adjectival)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukawanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate yaku (godan) to yakanai (adjectival)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yakanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate oyogu (godan) to oyoganai (adjectival)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('oyoganai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate simesu (godan) to simesanai (adjectival)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('simesanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate matu (godan) to matanai (adjectival)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('matanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate sinu (godan) to sinanai (adjectival)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sinanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate yobu (godan) to yobanai (adjectival)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yobanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate yomu (godan) to yomanai (adjectival)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yomanai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate hasiru (godan) to hasiranai (adjectival)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hasiranai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate kuru (kuru) to konai', function () {
            let phrase = kana.kuru.ku.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('konai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate suru (suru) to sinai', function () {
            let phrase = kana.suru.su.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sinai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate itai (adjectival) to ikunai', function () {
            let phrase = kana.adjectival.i.ta.i;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('itakunai');
            expect(type).to.equal('adjectival');
        });

        it('should conjugate kantan (nominal) to kantanzyanai', function () {
            let phrase = kana.nominal.ka.n.ta.n;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('kantanzyanai');
            expect(type).to.equal('adjectival');
        });

    });

});