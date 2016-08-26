'use strict';

const expect = require('chai').expect;
const proxyquire = require('proxyquire').noPreserveCache();
const sinon = require('sinon');
const GrammarError = require('./lib/error/grammar-error');

let kana = null;
let grammarStub = null;

describe('applyRule', function () {

    beforeEach(function () {
        grammarStub = {
            'testrule': {
                require: [''],
                apply: sinon.stub().returns('result')
            }
        };

        kana = proxyquire('./index', {
            './lib/grammar': grammarStub
        });
    });

    it('Kana objects should have function property "applyRule"', function () {
        let phrase = kana.ta.be.ru;
        expect(phrase.applyRule).to.exist;
        expect(typeof phrase.applyRule).to.equal('function');
    });

    it('should call apply of rule once', function () {
        let phrase = kana.ta.be.ru.applyRule('testrule');
        expect(grammarStub['testrule'].apply.calledOnce).to.be.true;
    });

    it('should return result of rule', function () {
        let res = kana.ta.be.ru.applyRule('testrule');
        expect(res).to.equal('result');
    });

    it('should throw GrammarError if rule not found', function () {
        function test () {
            let phrase = kana.ta.be.ru.applyRule('definitelynotarule');
        }
        expect(test).to.throw(GrammarError);
    });

});