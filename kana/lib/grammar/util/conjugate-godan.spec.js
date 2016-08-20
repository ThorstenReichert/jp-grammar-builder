'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const conjGodanFactory = require('./conjugate-godan');
const conj = conjGodanFactory(kana);

describe('util#conjugate-godan', function () {

    it('should export function', function () {
        expect(typeof conjGodanFactory).to.equal('function');
    });

    it('should return function that creates function', function () {
        expect(typeof conj).to.equal('function');
    });

    it('should conjugate (iku, a) to ika', function () {
        let phrase = kana.godan.i.ku;
        let char = 'a';
        let res = conj(phrase, char).toString();
        expect(res).to.equal('ika');
    });

    it('should conjugate (iku, i) to iki', function () {
        let phrase = kana.godan.i.ku;
        let char = 'i';
        let res = conj(phrase, char).toString();
        expect(res).to.equal('iki');
    });

    it('should conjugate (iku, e) to ike', function () {
        let phrase = kana.godan.i.ku;
        let char = 'e';
        let res = conj(phrase, char).toString();
        expect(res).to.equal('ike');
    });

    it('should conjugate (iku, o) to iko', function () {
        let phrase = kana.godan.i.ku;
        let char = 'o';
        let res = conj(phrase, char).toString();
        expect(res).to.equal('iko');
    });

    it('should conjugate (iku, i, masu) to ikimasu', function () {
        let phrase = kana.godan.i.ku;
        let char = 'i';
        let append = kana.ma.su;
        let res = conj(phrase, char, append).toString();
        expect(res).to.equal('ikimasu');
    });

});