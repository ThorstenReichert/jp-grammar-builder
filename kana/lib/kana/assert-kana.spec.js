'use strict';

const expect = require('chai').expect;
const kana = require('../kana');
const KanaError = require('../error/kana-error');
const assert = require('./assert-kana');

describe('util#assert-kana', function () {

    it('should export function', function () {
        expect(typeof assert).to.equal('function');
    });

    it('should not throw error on instance of Kana', function () {
        let test = function () {
            assert(kana.ta.be.ru);
        };
        expect(test).to.not.throw();
    });

    it('should throw KanaError if argument is object', function () {
        let test = function () {
            assert({});
        };
        expect(test).to.throw(KanaError);
    });

    it('should throw KanaError if argument is undefined', function () {
        let test = function () {
            assert(undefined);
        };
        expect(test).to.throw(KanaError);
    })

    it('should throw KanaError if argument is null', function () {
        let test = function () {
            assert(null);
        };
        expect(test).to.throw(KanaError);
    });

    it('should throw KanaError if argument is string', function () {
        let test = function () {
            assert("teststring");
        };
        expect(test).to.throw(KanaError);
    });

    it('should throw KanaError if argument is number', function () {
        let test = function () {
            assert(5);
        };
        expect(test).to.throw(KanaError);
    });

});