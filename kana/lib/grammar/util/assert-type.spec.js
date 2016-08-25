'use strict';

const expect = require('chai').expect;
const assert = require('./assert-type');

describe('util#assert-type', function () {

    it('should export object', function () {
        expect(typeof assert).to.equal('object');
    });

    it('should have function "adjectival"', function () {
        expect(assert['adjectival']).to.exist;
        expect(typeof assert['adjectival']).to.equal('function');
    });

    it('should have function "godan"', function () {
        expect(assert['godan']).to.exist;
        expect(typeof assert['godan']).to.equal('function');
    });

    it('should have function "ichidan"', function () {
        expect(assert['ichidan']).to.exist;
        expect(typeof assert['ichidan']).to.equal('function');
    });

    it('should have function "nominal"', function () {
        expect(assert['nominal']).to.exist;
        expect(typeof assert['nominal']).to.equal('function');
    });

});