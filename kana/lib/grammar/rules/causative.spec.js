'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./causative');
const apply = rule.apply;

describe('grammar#causative', function () {

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

    });

    describe('.apply', function () {

        it('should exist', function () {
            expect(apply).to.exist;
        });

        it('should be function', function () {
            expect(typeof apply).to.equal('function');
        });

        it('should conjugate taberu (ichidan) to tabesaseru (ichidan)', function () {
            let phrase = kana.ichidan.ta.be.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tabesaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate tukau (godan) to tukawaseru (ichidan)', function () {
            let phrase = kana.godan.tu.ka.u;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('tukawaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yaku (godan) to yakaseru (ichidan)', function () {
            let phrase = kana.godan.ya.ku;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yakaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate oyogu (godan) to oyogaseru (ichidan)', function () {
            let phrase = kana.godan.o.yo.gu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('oyogaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate simesu (godan) to simesaseru (ichidan)', function () {
            let phrase = kana.godan.si.me.su;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('simesaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate matu (godan) to mataseru (ichidan)', function () {
            let phrase = kana.godan.ma.tu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('mataseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate sinu (godan) to sinaseru (ichidan)', function () {
            let phrase = kana.godan.si.nu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('sinaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yobu (godan) to yobaseru (ichidan)', function () {
            let phrase = kana.godan.yo.bu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yobaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate yomu (godan) to yomaseru (ichidan)', function () {
            let phrase = kana.godan.yo.mu;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('yomaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate hasiru (godan) to hasiraseru (ichidan)', function () {
            let phrase = kana.godan.ha.si.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('hasiraseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate kuru (kuru) to kosaseru (ichidan)', function () {
            let phrase = kana.kuru.ku.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('kosaseru');
            expect(type).to.equal('ichidan');
        });

        it('should conjugate suru (suru) to saseru (ichidan)', function () {
            let phrase = kana.suru.su.ru;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('saseru');
            expect(type).to.equal('ichidan');
        });

    });

});