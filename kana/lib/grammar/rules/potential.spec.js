'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const ruleFactory = require('./potential');
const rule = ruleFactory(kana);
const apply = rule.apply;

describe('grammar#potential', function () {

    it('should export factory function', function () {
        expect(typeof ruleFactory).to.equal('function');
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

        it('should conjugate taberu (ichidan) to taberareru (ichidan)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('taberareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate tukau (godan) to tukaeru (ichidan)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('tukaeru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yaku (godan) to yakeru (ichidan)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('yakeru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate oyogu (godan) to oyogeru (ichidan)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('oyogeru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate simesu (godan) to simeseru (ichidan)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('simeseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate matu (godan) to materu (ichidan)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('materu');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate sinu (godan) to sineru (ichidan)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('sineru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yobu (godan) to yoberu (ichidan)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('yoberu');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yomu (godan) to yomeru (ichidan)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('yomeru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate hasiru (godan) to hasireru (ichidan)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('hasireru');
            expect(type).to.equal('ichidan');
        });

    });

});