'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const wagner = require('wagner-core');
const noop = require('node-noop').noop;
const env = require('../config/env');
const handlerFactory = require('./error-handler');

describe('middleware#error-handler', function () {

    let handler = null;

    const mocks = {};

    const resetWagner = function (w) {
        w.clear();
        w.factory('logger', function () {
            return mocks.logger;
        });
        w.factory('config', function () {
            return mocks.config;
        });
    };

    beforeEach(function () {
        mocks.config = {
            env: env.development
        };
        mocks.logger = {
            debug: noop,
            error: sinon.spy()
        };

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
        handler(null, null, mocks.res, next);
        expect(next.calledOnce).to.be.true;
    });

    it('should respond with http status 500', function () {
        let err = new Error();
        handler(err, null, mocks.res, null);
        expect(mocks.res.status.calledOnce).to.be.true;
        expect(mocks.res.status.calledWith(500)).to.be.true;
    });

    it('should respond with error object', function () {
        let err = new Error('randomerrormessage');
        handler(err, null, mocks.res, null);
        expect(mocks.res.json.calledOnce).to.be.true;
        expect(mocks.res.json.calledWith(err)).to.be.true;
    });

    it('should strip stacktrace if not in development mode', function () {
        mocks.config.env = env.production;
        resetWagner(wagner);
        handler = handlerFactory(wagner);

        let err = new Error('randomerror');
        expect(err.stack).to.exist;
        handler(err, null, mocks.res, null);
        expect(mocks.res.json.calledOnce).to.be.true;

        let response = mocks.res.json.args[0][0];
        expect(response.stack).to.not.exist;
    });

    it('should log error', function () {
        let err = new Error('message');
        handler(err, null, mocks.res, null);
        expect(mocks.logger.error.called).to.be.true;
    });

});