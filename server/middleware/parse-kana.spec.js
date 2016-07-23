'use strict';

const expect = require('chai').expect;
const parseKana = require('./parse-kana');

describe('middleware#parse-kana', function () {

    it('should export function', function () {
        expect(typeof parseKana).to.equal('function');
    });

});