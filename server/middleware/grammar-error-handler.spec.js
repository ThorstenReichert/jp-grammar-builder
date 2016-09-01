'use strict';

const expect = require('chai').expect;
const http = require('http-status');
const noop = require('node-noop').noop;
const sinon = require('sinon');
const wagner = require('wagner-core');
const GrammarError = require('../../kana').GrammarError;
const handlerFactory = require('./grammar-error-handler');

describe('middleware#grammar-error-handler', function () {

    let handler = null;

    const mocks = {};

    const resetWagner = function (w) {
        wagner.clear();
        wagner.factory('config', function () {
            return mocks.config;
        });
        wagner.factory('logger', function () {
            return mocks.logger;
        });
    };

    beforeEach(function () {
        mocks.config = {};
        mocks.logger = {
            debug: noop
        };
        mocks.req = {
            result: [{}]
        }

        let json = sinon.spy();
        let status = sinon.stub().returns({json: json});
        mocks.res = {
            json: json,
            status: status
        };

        resetWagner(wagner);

        handler = handlerFactory(wagner);
    });

    it('should export factory function', function () {
        expect(typeof handlerFactory).to.equal('function');
        expect(typeof handler).to.equal('function');
    });

    it('should call next if no error given', function () {
        let next = sinon.spy();
        handler(null, null, null, next);
        expect(next.calledOnce).to.be.true;
    });

    it('should call next if error is not GrammarError', function () {
        let next = sinon.spy();
        let err = new Error('randommessage');
        handler(err, null, null, next);
        expect(next.calledOnce).to.be.true;
        expect(next.calledWith(err)).to.be.true;
    });

    it('should respond with status code ' + http.BAD_REQUEST + ' (bad request)', function () {
        let err = new GrammarError('grammar message');
        handler(err, mocks.req, mocks.res, null);
        expect(mocks.res.status.calledOnce).to.be.true;
        expect(mocks.res.status.calledWith(http.BAD_REQUEST)).to.be.true;
    });

    it('should attach error message to req.result', function () {
        let msg = 'someerrormessage';
        let err = new GrammarError(msg);
        handler(err, mocks.req, mocks.res, null);
        expect(mocks.res.json.calledOnce).to.be.true;
        expect(mocks.res.json.calledWith(mocks.req.result)).to.be.true;
        expect(mocks.req.result.length).to.equal(1);
        expect(mocks.req.result[0].error).to.equal(msg);
    });

});