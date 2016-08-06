import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('element # kana', function () {

    let component = null;
    let word = null;

    beforeEach(function () {
        word = ['a', 'ku', 'ma'];

        component = StageComponent
            .withResources('./resources/elements/kana')
            .inView('<kana word.bind="word"></kana>')
            .boundTo({word: word});
    });

    it('should render "akuma" in hiragana', function (done) {
        component.create(bootstrap).then(function () {
            const span = document.querySelector('span');
            expect(span.innerHTML).toEqual('あくま');
            done();
        });
    });

    afterEach(function () {
        component.dispose();
    });

});