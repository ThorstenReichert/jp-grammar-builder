'use strict';

const expect = require('chai').expect;
const procKana = require('./proc-kana');

describe('middleware#proc-kana', function () {

    it('should export function', function () {
        expect(typeof procKana).to.equal('function');
    });

});