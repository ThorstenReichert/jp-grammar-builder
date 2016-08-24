'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const conj = require('./conjugate-ichidan');

describe('util#conjugate-ichidan', function () {

    it('should export function', function () {
        expect(typeof conj).to.equal('function');
    });

    it('should export function that creates function', function () {
        expect(typeof conj).to.equal('function');
    });

    it('should conjugate (taberu) to tabe', function () {
        let phrase = kana.ichidan.ta.be.ru;
        let append = null;
        let res = conj(phrase, append).toString();
        expect(res).to.equal('tabe');
    });

    it('should conjugate (taberu, ta) to tabeta', function () {
        let phrase = kana.ichidan.ta.be.ru;
        let append = kana.ta;
        let res = conj(phrase, append).toString();
        expect(res).to.equal('tabeta');
    });

});