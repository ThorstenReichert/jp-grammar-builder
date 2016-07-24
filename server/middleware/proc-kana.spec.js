'use strict';

const expect = require('chai').expect;
const procKana = require('./proc-kana');
const kana = require('../../kana');
const sinon = require('sinon');
const wagner = require('wagner-core');

describe('middleware#proc-kana', function () {

    let procKana = null;
    let mocks = {};

    beforeEach(function () {
        wagner.clear();
        wagner.factory('kana', function () {
            return kana;
        });

        procKana = require('./proc-kana')(wagner);
    });

    beforeEach(function () {
        mocks.kana = kana.ichidan.ta.be.ru;

        mocks.req = {
            kana: mocks.kana,
            body: {
                grammar: null
            }
        };
    });

    it('should export function', function () {
        expect(typeof procKana).to.equal('function');
    });

    it('should keep req.kana if no grammar given', function (done) {
        procKana(mocks.req, null, function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.kana.equals(mocks.kana));
            done();
        });
    });

    it('should conjugate kana for single grammar rule', function (done) {
        let test = mocks.kana.clone().applyRule('stem');
        mocks.req.body.grammar = 'stem';

        procKana(mocks.req, null, function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.kana.equals(test)).to.be.true;
            done();
        });
    });

    it('should conjugate kana for multiple grammar rules', function (done) {
        let test = mocks.kana.clone().applyRule('stem').applyRule('distal');
        mocks.req.body.grammar = ['stem', 'distal'];

        procKana(mocks.req, null, function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.kana.equals(test)).to.be.true;
            done();
        });
    });

    it('should forward Kana errors', function (done) {
        let stub = sinon.stub().throws();
        mocks.req.kana.applyRule = stub;
        mocks.req.body.grammar = 'stem';

        procKana(mocks.req, null, function (err) {
            expect(err).to.exist;
            expect(stub.calledOnce).to.be.true;
            done();
        });
    });

});