'use strict';

const expect = require('chai').expect;
const kana = require('../../kana');
const rule = require('./suru');
const apply = rule.apply;

describe('grammar#progressive', function () {

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

        it('should contain nominal', function () {
            expect(rule.require.indexOf('nominal')).to.be.at.least(0);
        });

    });

    describe('.apply', function () {

        it('should exist', function () {
            expect(apply).to.exist;
        });

        it('should be function', function () {
            expect(typeof apply).to.equal('function');
        });

        it('should conjugate kore (nominal) to korenisuru (suru)', function () {
            let phrase = kana.nominal.ko.re;
            phrase = apply(phrase);

            let res = phrase.toString();
            let type = phrase.type;

            expect(res).to.equal('korenisuru');
            expect(type).to.equal('suru');
        });

    });

});