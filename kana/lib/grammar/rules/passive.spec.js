'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const ruleFactory = require('./passive');
const rule = ruleFactory(kana);
const apply = rule.apply;

describe('grammar#passive', function () {

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

        it('should conjugate tukau (godan) to tukawareru (ichidan)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('tukawareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yaku (godan) to yakareru (ichidan)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('yakareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate oyogu (godan) to oyogareru (ichidan)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('oyogareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate simesu (godan) to simesareru (ichidan)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('simesareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate matu (godan) to matareru (ichidan)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('matareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate sinu (godan) to sinareru (ichidan)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('sinareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yobu (godan) to yobareru (ichidan)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('yobareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yomu (godan) to yomareru (ichidan)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('yomareru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate hasiru (godan) to hasirareru (ichidan)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;
            
            expect(res).to.equal('hasirareru');
            expect(type).to.equal('ichidan');
        });

    });

});