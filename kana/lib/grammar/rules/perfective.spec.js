'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./perfective');
const apply = rule.apply;

describe('grammar#perfective', function () {

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

        it('should conjugate taberu (ichidan) to tabeta', function () {
            let phrase = kana.ichidan.ta.be.ru;
            let res = apply(phrase).toString();
            expect(res).to.equal('tabeta');
        });

        it('should conjugate hanasu (godan) to hanasita', function () {
            let phrase = kana.godan.ha.na.su;
            let res = apply(phrase).toString();
            expect(res).to.equal('hanasita');
        });

        it('should conjugate kaku (godan) to kaita', function () {
            let phrase = kana.godan.ka.ku;
            let res = apply(phrase).toString();
            expect(res).to.equal('kaita');
        });

        it('should conjugate oyogu (godan) to oyoida', function () {
            let phrase = kana.godan.o.yo.gu;
            let res = apply(phrase).toString();
            expect(res).to.equal('oyoida');
        });

        it('should conjugate nomu (godan) to nonda', function () {
            let phrase = kana.godan.no.mu;
            let res = apply(phrase).toString();
            expect(res).to.equal('nonda');
        });

        it('should conjugate asobu (godan) to asonda', function () {
            let phrase = kana.godan.a.so.bu;
            let res = apply(phrase).toString();
            expect(res).to.equal('asonda');
        });

        it('should conjugate sinu (godan) to sindea', function () {
            let phrase = kana.godan.si.nu;
            let res = apply(phrase).toString();
            expect(res).to.equal('sinda');
        });

        it('should conjugate kiru (godan) to kitta', function () {
            let phrase = kana.godan.ki.ru;
            let res = apply(phrase).toString();
            expect(res).to.equal('kitta');
        });

        it('should conjugate kau (godan) to katta', function () {
            let phrase = kana.godan.ka.u;
            let res = apply(phrase).toString();
            expect(res).to.equal('katta');
        });

        it('should conjugate motu (godan) to motta', function () {
            let phrase = kana.godan.mo.tu;
            let res = apply(phrase).toString();
            expect(res).to.equal('motta');
        });

        it('should conjugate yasui (adjectival) to yasukatta', function () {
            let phrase = kana.adjectival.ya.su.i;
            let res = apply(phrase).toString();
            expect(res).to.equal('yasukatta');
        });

        it('should conjugate kantan (nominal) to kantandatta', function () {
            let phrase = kana.nominal.ka.n.ta.n;
            let res = apply(phrase).toString();
            expect(res).to.equal('kantandatta');
        });

        it('should conjugate kuru (kuru) to kita', function () {
            let phrase = kana.kuru.ku.ru;
            let res = apply(phrase).toString();
            expect(res).to.equal('kita');
        });

        it('should conjugate suru (suru) to sita', function () {
            let phrase = kana.suru.su.ru;
            let res = apply(phrase).toString();
            expect(res).to.equal('sita');
        });

    });

});