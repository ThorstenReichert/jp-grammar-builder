'use strict';

const async = require('async');
const expect = require('chai').expect;
const kana = require('../../../kana');
const wagner = require('wagner-core');
const _ = require('lodash');

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
                kana: ['ta', 'be', 'ru'],
                type: 'ichidan',
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

    it('should set req.result array', function (done) {
        api(function (err) {
            expect(err).to.not.exist;
            expect(mocks.req.result).to.exist;
            expect(Array.isArray(mocks.req.result));
            done();
        });
    });

    it('should conjugate kana for single grammar rule', function (done) {
        let test = kana.ichidan.mi.ru;
        mocks.req.body.kana = test.toArray();
        mocks.req.body.type = test.type;
        mocks.req.body.grammar = 'stem';

        let one = test.clone();
        test.applyRule('stem');

        api(function (err) {
            expect(err).to.not.exist;

            let res = mocks.req.result;
            expect(res.length).to.equal(2);

            expect(_.isEqual(res[0].kana, one.toArray())).to.be.true;
            expect(res[0].type).to.equal(one.type);

            expect(_.isEqual(res[1].kana, test.toArray())).to.be.true;
            expect(res[1].type).to.equal(test.type);

            done();
        });
    });

    it('should conjugate kana for multiple grammar rules', function (done) {
        let test = kana.ichidan.mi.ru;
        mocks.req.body.kana = test.toArray();
        mocks.req.body.type = test.type;
        mocks.req.body.grammar = ['stem', 'distal'];

        let one = test.clone();
        test.applyRule('stem');
        let two = test.clone();
        test.applyRule('distal');

        api(function (err) {
            expect(err).to.not.exist;

            let res = mocks.req.result;
            expect(res.length).to.equal(3);

            expect(_.isEqual(res[0].kana, one.toArray())).to.be.true;
            expect(res[0].type).to.equal(one.type);

            expect(_.isEqual(res[1].kana, two.toArray())).to.be.true;
            expect(res[1].type).to.equal(two.type);

            expect(_.isEqual(res[2].kana, test.toArray())).to.be.true;
            expect(res[2].type).to.equal(test.type);

            done();
        });
    });

});