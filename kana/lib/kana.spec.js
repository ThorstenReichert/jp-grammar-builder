'use strict';

/*jshint expr:true */

const expect = require('chai').expect;
const sinon = require('sinon');
const kana = require('./kana');

describe('kana', function () {

    describe('#factory', function () {

        it('should create Kana object', function () {
            expect(kana.a).to.exist;
        });

        it('should be JSL-compliant (chars.js)', function () {
            const chars = require('./chars');
            chars.forEach(function(char) {
                expect(kana[char].toString()).to.equal(char);
            });
        });

        it('should create all types (types.js)', function () {
            const types = require('./types');
            types.forEach(function (type) {
                expect(kana[type].type).to.equal(type);
            });
        });

        it('should be chainable', function () {
            expect(kana.i.tu.mo.toString()).to.equal('itumo');
        });

        it('should create different instances of Kana', function () {
            expect(kana.te).to.not.equal(kana.te);
            expect(kana.godan).to.not.equal(kana.godan);
        });

    });

    describe('#add', function () {

        it('should add Kana', function () {
            let k = kana.i;
            k.add(kana.tu);
            expect(k.toString()).to.equal('itu');
        });

        it('should add Array', function () {
            let k = kana.i;
            k.add(['tu','mo']);
            expect(k.toString()).to.equal('itumo');
        });

        it('should add string', function () {
            let k = kana.i;
            k.add('tu');
            expect(k.toString()).to.equal('itu');
        });

        it('should validate Array argument', function () {
            let k = kana.i;
            let fn = function () {
                kana.add(['tu', 'm']);
            };
            expect(fn).to.throw(Error);
        });

        it('should validate string argument', function () {
            let k = kana.i;
            let fn = function () {
                kana.add('k');
            };
            expect(fn).to.throw(Error);
        });

    });

    describe('#applyRule', function () {

        let oldrequire = null;
        let requireSpy = null;
        let applySpy = null;
        let replaced = false;
        let name = 'testgrammarrule';
        let k = kana.i.tu.mo;

        beforeEach(function () {
            oldrequire = kana.require;
            requireSpy = sinon.spy();
            applySpy = sinon.spy();

            k.require = requireSpy;

            if (require('./kana').grammar.testgrammarrule) {
                console.log('warning: testgrammarrule already exists, will not replace');
            } else {
                require('./kana').grammar[name] = {
                    require: 'blub',
                    apply: applySpy
                };
                replaced = true;
            }
        });

        afterEach(function () {
            if (replaced) {
                replaced = false;
                delete require('./kana').grammar[name];
            }
        });

        it('should call require with required types from rule', function () {
            k.applyRule(name);
            expect(requireSpy.calledOnce).to.be.true;
            expect(requireSpy.calledWith('godan'));
        });

        it('should call apply of grammar rule on self', function () {
            k.applyRule(name);
            expect(applySpy.calledOnce).to.be.true;
            expect(applySpy.calledWith(k)).to.be.true;
        });

    });

    describe('#endsWith', function () {

        it('should compare ending with Kana argument', function () {
            expect(kana.i.endsWith(kana.i)).to.be.true;
            expect(kana.i.endsWith(kana.te)).to.be.false;
        });

        it('should compare ending with multiple character Kana argument', function () {
            expect(kana.i.tu.mo.endsWith(kana.tu.mo)).to.be.true;
            expect(kana.i.tu.mo.endsWith(kana.tu.tu)).to.be.false;
        });

        it('should compare ending with Array argument', function () {
            expect(kana.i.endsWith(['i'])).to.be.true;
            expect(kana.i.endsWith(['te'])).to.be.false;
        });

        it('should compare ending with multiple character Array argument', function () {
            expect(kana.i.tu.mo.endsWith(['tu','mo'])).to.be.true;
            expect(kana.i.tu.mo.endsWith(['tu','tu'])).to.be.false;
        });

        it('should compare ending with string argument', function () {
            expect(kana.i.endsWith('i')).to.be.true;
            expect(kana.i.endsWith('te')).to.be.false;
        });

        it('should return false if argument is longer than kana', function () {
            expect(kana.i.endsWith(kana.tu.i)).to.be.false;
        });

        it('should return false if argument is not supported character', function () {
            expect(kana.i.endsWith('k')).to.be.false;
        });

        it('should return false if argument contains not supported character', function () {
            expect(kana.i.tu.mo.endsWith(['t','mo'])).to.be.false;
        });

    });

    describe('#equals', function () {

        it('should compare with Kana argument', function () {
            expect(kana.i.equals(kana.i)).to.be.true;
            expect(kana.i.equals(kana.tu)).to.be.false;
        });

        it('should compare with multiple character Kana argument', function () {
            expect(kana.i.tu.mo.equals(kana.i.tu.mo)).to.be.true;
            expect(kana.i.tu.mo.equals(kana.te.tu.tu)).to.be.false;
        });

        it('should compare with Array argument', function () {
            expect(kana.i.equals(['i'])).to.be.true;
            expect(kana.i.equals(['tu'])).to.be.false;
        });

        it('should compare ending with multiple character Array argument', function () {
            expect(kana.i.tu.mo.equals(['i', 'tu','mo'])).to.be.true;
            expect(kana.i.tu.mo.equals(['te', 'tu','tu'])).to.be.false;
        });

        it('should compare with string argument', function () {
            expect(kana.i.equals('i')).to.be.true;
            expect(kana.i.equals('tu')).to.be.false;
        });

        it('should return false if argument is longer than kana', function () {
            expect(kana.i.equals(kana.tu.i)).to.be.false;
        });

        it('should return false if argument is shorter than kana', function () {
            expect(kana.i.mo.tu.equals(kana.i.mo)).to.be.false;
        });

        it('should return false if argument is not supported character', function () {
            expect(kana.i.equals('k')).to.be.false;
        });

        it('should return false if argument contains not supported character', function () {
            expect(kana.i.tu.mo.equals(['t','mo'])).to.be.false;
        });

    });

    describe('#pop', function () {

        it('should return last character as Kana object', function () {
            expect(kana.i.tu.pop().toString()).to.equal('tu');
        });

        it('should remove last character from Kana object', function () {
            let k = kana.i.tu;
            k.pop();
            expect(k.toString()).to.equal('i');
        });

    });

    describe('#require', function () {

        it('should not throw if type is of required type', function () {
            let fn = function () {
                kana.ichidan.require('ichidan');
            };
            expect(fn).to.not.throw(Error);
        });

        it('should not throw if type is one of required types', function () {
            let fn = function () {
                kana.ichidan.require(['ichidan', 'godan']);
            };
            expect(fn).to.not.throw(Error);
        });

        it('should throw Error if type is not required type', function () {
            let fn = function () {
                kana.ichidan.require('godan');
            };
            expect(fn).to.throw(Error);
        });

        it('should throw Error if type is not one of required types', function () {
            let fn = function () {
                kana.ichidan.require(['stem', 'godan']);
            };
            expect(fn).to.throw(Error);
        });

    });

    describe('#toArray', function () {

        it('should return Array', function () {
            expect(Array.isArray(kana.i.tu.mo.toArray())).to.be.true;
        });

        it('should return Array of characters', function () {
            let k = kana.i.tu.mo.toArray();
            let a = ['i','tu','mo'];
            for (let i = 0; i < a.length; i++) {
                expect(k[i]).to.equal(a[i]);
            }
        });

    });

    describe('#toString', function () {

        it('should return type string', function () {
            expect(typeof kana.i.tu.mo.toString()).to.equal('string');
        });

        it('should return concatenated characters', function () {
            expect(kana.i.tu.mo.toString()).to.equal('itumo');
        });

        it('should accept separator argument', function () {
            expect(kana.i.tu.mo.toString(',')).to.equal('i,tu,mo');
        });

    });

});