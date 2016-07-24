'use strict';

const async = require('async');
const expect = require('chai').expect;
const kana = require('../../../kana');
const wagner = require('wagner-core');

describe('api/kana', function () {

    let parseKana = null;
    let procKana = null;
    let api = null;
    let mocks = {};

    beforeEach(function () {
        wagner.clear();
        wagner.factory('kana', function () {
            return kana;
        });

        parseKana = require('../../middleware/parse-kana')(wagner);
        procKana = require('../../middleware/proc-kana')(wagner);
    });

    beforeEach(function () {
        mocks.req = {
            body: {
                kana: {
                    word: ['ta', 'be', 'ru'],
                    type: 'ichidan'
                },
                grammar: null
            }
        };
    });

    beforeEach(function () {
        let stack = [
            function (next) {
                parseKana(mocks.req, null, function (err) {
                    next(err);
                });
            },
            function (next) {
                procKana(mocks.req, null, function (err) {
                    next(err);
                });
            }
        ];

        api = function (callback) {
            async.series(stack, callback);
        };
    });

    it('should set req.kana', function (done) {
        api(function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.kana).to.exist;
            done();
        });
    });

    it('should conjugate kana for single grammar rule', function (done) {
        let test = kana.ichidan.ta.be.ru;
        mocks.req.body.kana.word = test.toArray();
        mocks.req.body.kana.type = test.type;
        mocks.req.body.grammar = 'stem';
        test.applyRule('stem');
        
        api(function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.kana.equals(test)).to.be.true;
            done();
        });
    });

    it('should conjugate kana formultiple grammar rules', function (done) {
        let test = kana.ichidan.ta.be.ru;
        mocks.req.body.kana.word = test.toArray();
        mocks.req.body.kana.type = test.type;
        mocks.req.body.grammar = ['stem', 'distal'];
        test.applyRule('stem').applyRule('distal');

        api(function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.kana.equals(test)).to.be.true;
            done();
        });
    });

});