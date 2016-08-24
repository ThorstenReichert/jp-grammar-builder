'use strict';

const expect = require('chai').expect;
const kana = require('./kana');
const grammar = require('./grammar');

describe('grammar', function () {

    it('should export object', function () {
        expect(typeof grammar).to.equal('object');
    });

    it('should have rule "causative"', function () {
        expect(grammar['causative']).to.exist;
    });

    it('should have rule "i-form"', function () {
        expect(grammar['i-form']).to.exist;
    });

    it('should have rule "imperative"', function () {
        expect(grammar['imperative']).to.exist;
    });

    it('should have rule "negative"', function () {
        expect(grammar['negative']).to.exist;
    });

    it('should have rule "passive"', function () {
        expect(grammar['passive']).to.exist;
    });

    it('should have rule "perfective"', function () {
        expect(grammar['perfective']).to.exist;
    });

    it('should have rule "potential"', function () {
        expect(grammar['potential']).to.exist;
    });

    it('should have rule "te-form"', function () {
        expect(grammar['te-form']).to.exist;
    });

    it('should have rule "volitional"', function () {
        expect(grammar['volitional']).to.exist;
    });

});