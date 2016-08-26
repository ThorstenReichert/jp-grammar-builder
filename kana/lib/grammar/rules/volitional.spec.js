'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./volitional');
const apply = rule.apply;

describe('grammar#volitional', function () {

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

        it('should conjugate taberu (ichidan) to tabeyou (volitional)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabeyou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate tukau (godan) to tukaou (volitional)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukaou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate yaku (godan) to yakou (volitional)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yakou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate oyogu (godan) to oyogou (volitional)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('oyogou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate simesu (godan) to simesou (volitional)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('simesou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate matu (godan) to matou (volitional)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('matou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate sinu (godan) to sinou (volitional)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sinou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate yobu (godan) to yobou (volitional)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yobou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate yomu (godan) to yomou (volitional)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yomou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate hasiru (godan) to hasirou (volitional)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hasirou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate kuru (kuru) to koyou (volitional)', function () {
            let phrase = kana.kuru.ku.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('koyou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate suru (suru) to siyou (volitional)', function () {
            let phrase = kana.suru.su.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('siyou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate tikai (adjectival) to tikakarou (volitional)', function () {
            let phrase = kana.adjectival.ti.ka.i;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tikakarou');
            expect(type).to.equal('volitional');
        });

        it('should conjugate suki (nominal) to sukidarou (volitional)', function () {
            let phrase = kana.nominal.su.ki;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sukidarou');
            expect(type).to.equal('volitional');
        });

    });

});