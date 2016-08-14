'use strict';

const expect = require('chai').expect;
const kana = require('./kana');
const grammar = require('./kana').grammar;

describe('grammar', function () {

    describe('#stem', function () {

        it('of taberu (ichidan) should be tabe', function () {
            expect(kana.ichidan.ta.be.ru.applyRule('stem').toString()).to.equal('tabe');
        });

        it('of sinu (godan) should be sini', function () {
            expect(kana.godan.si.nu.applyRule('stem').toString()).to.equal('sini');
        });

        it('of hanasu (godan) should be hanasi', function () {
            expect(kana.godan.ha.na.su.applyRule('stem').toString()).to.equal('hanasi');
        });

        it('of kau (godan) should be kai', function () {
            expect(kana.godan.ka.u.applyRule('stem').toString()).to.equal('kai');
        });

        it('of kiru (godan) should be kiri', function () {
            expect(kana.godan.ki.ru.applyRule('stem').toString()).to.equal('kiri');
        });

    });

    describe('#distal', function () {

        it('of tabe (stem) should be tabemasu', function () {
            expect(kana.stem.ta.be.applyRule('distal').toString()).to.equal('tabemasu');
        });

        it('of kai (stem) should be kaimasu', function () {
            expect(kana.stem.ka.i.applyRule('distal').toString()).to.equal('kaimasu');
        });

        it('of kiru (stem) should be kirimasu', function () {
            expect(kana.stem.ki.ri.applyRule('distal').toString()).to.equal('kirimasu');
        });

    });

    describe('#past', function () {

        it('of taberu (ichidan) should be tabeta', function () {
            expect(kana.ichidan.ta.be.ru.applyRule('past').toString()).to.equal('tabeta');
        });

        it('of hanasu (godan) should be hanasita', function () {
            let k = kana.godan.ha.na.su;
            expect(k.applyRule('past').toString()).to.equal('hanasita');
        });

        it('of kaku (godan) should be kaita', function () {
            let k = kana.godan.ka.ku;
            expect(k.applyRule('past').toString()).to.equal('kaita');
        });

        it('of oyogu (godan) should be oyoida', function () {
            let k = kana.godan.o.yo.gu;
            expect(k.applyRule('past').toString()).to.equal('oyoida');
        });

        it('of nomu (godan) should be nonda', function () {
            let k = kana.godan.no.mu;
            expect(k.applyRule('past').toString()).to.equal('nonda');
        });

        it('of asobu (godan) should be asobunda', function () {
            let k = kana.godan.a.so.bu;
            expect(k.applyRule('past').toString()).to.equal('asonda');
        });

        it('of sinu (godan) should be sinda', function () {
            let k = kana.godan.si.nu;
            expect(k.applyRule('past').toString()).to.equal('sinda');
        });

        it('of kiru (godan) should be kitta', function () {
            let k = kana.godan.ki.ru;
            expect(k.applyRule('past').toString()).to.equal('kitta');
        });

        it('of kau (godan) should be katta', function () {
            let k = kana.godan.ka.u;
            expect(k.applyRule('past').toString()).to.equal('katta');
        });

        it('of motu (godan) should be motta', function () {
            let k = kana.godan.mo.tu;
            expect(k.applyRule('past').toString()).to.equal('motta');
        });

    });

    describe('#negative', function () {

        it('of taberu (ichidan) should be tebenai', function () {
            let k = kana.ichidan.ta.be.ru;
            expect(k.applyRule('negative').toString()).to.equal('tabenai');
        });

        it('of sinu (godan) should be sinanai', function () {
            let k = kana.godan.si.nu;
            expect(k.applyRule('negative').toString()).to.equal('sinanai');
        });

        it('of kiru (godan) should be kiranai', function () {
            let k = kana.godan.ki.ru;
            expect(k.applyRule('negative').toString()).to.equal('kiranai');
        });

        it('of motu (godan) should be motanai', function () {
            let k = kana.godan.mo.tu;
            expect(k.applyRule('negative').toString()).to.equal('motanai');
        });

    });

});