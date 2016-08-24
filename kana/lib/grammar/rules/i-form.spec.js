'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./i-form');
const apply = rule.apply;

describe('grammar#i-form', function () {

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

        it('should conjugate taberu (ichidan) to tabe (i-form)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabe');
            expect(type).to.equal('i-form');
        });

        it('should conjugate tukau (godan) to tukai (i-form)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukai');
            expect(type).to.equal('i-form');
        });

        it('should conjugate yaku (godan) to yaki (i-form)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yaki');
            expect(type).to.equal('i-form');
        });

        it('should conjugate oyogu (godan) to oyogi (i-form)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('oyogi');
            expect(type).to.equal('i-form');
        });

        it('should conjugate simesu (godan) to simesi (i-form)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('simesi');
            expect(type).to.equal('i-form');
        });

        it('should conjugate matu (godan) to mati (i-form)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('mati');
            expect(type).to.equal('i-form');
        });

        it('should conjugate sinu (godan) to sini (i-form)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sini');
            expect(type).to.equal('i-form');
        });

        it('should conjugate yobu (godan) to yobi (i-form)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yobi');
            expect(type).to.equal('i-form');
        });

        it('should conjugate yomu (godan) to yomi (i-form)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yomi');
            expect(type).to.equal('i-form');
        });

        it('should conjugate hasiru (godan) to hasiri (i-form)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hasiri');
            expect(type).to.equal('i-form');
        });

    });

});